"use server";

import { supabase } from '@/lib/supabase';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const leadSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое").max(100),
  phone: z.string().min(10, "Некорректный номер телефона").max(20),
  email: z.string().email("Некорректный email").or(z.literal("")),
  service: z.string().min(1, "Выберите услугу"),
  message: z.string().max(1000).optional(),
  website: z.string().max(0, "Bot detected").optional(), // Honeypot: must be empty
});

export type SubmitLeadResponse = 
  | { success: true }
  | { success: false; error: string };

export async function submitLead(rawData: unknown): Promise<SubmitLeadResponse> {
  // 1. Validate data with Zod
  const validated = leadSchema.safeParse(rawData);
  
  if (!validated.success) {
    const errorMsg = validated.error.issues?.[0]?.message || "Ошибка валидации";
    console.warn("Lead validation failed:", validated.error.format());
    return { success: false, error: errorMsg };
  }

  const { website, ...data } = validated.data;

  // 2. Insert into Supabase
  const { error } = await supabase.from('contact_leads').insert([data]);
  
  if (error) {
    console.error("Supabase insert error:", error);
    // Don't leak DB internal errors to the client
    return { success: false, error: "Не удалось сохранить заявку. Пожалуйста, настройте Supabase или попробуйте позже." };
  }
  // 3. Send email notification via Resend
  if (resend) {
    try {
      await resend.emails.send({
        from: 'Verno Group <onboarding@resend.dev>', // Temporary testing domain provided by Resend
        to: 'info@verno-group.kz',
        subject: `Новая заявка: ${data.service}`,
        html: `
          <h2>Новая заявка с сайта Verno Group</h2>
          <p><strong>Имя:</strong> ${data.name}</p>
          <p><strong>Телефон:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email || 'Не указан'}</p>
          <p><strong>Услуга:</strong> ${data.service}</p>
          <p><strong>Сообщение:</strong> ${data.message || 'Нет сообщения'}</p>
        `
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // We do not throw here, so the user still gets a success message if DB insert worked.
    }
  } else {
    console.warn("RESEND_API_KEY is not configured. Email notification skipped.");
  }
  
  revalidateTag('leads', 'hours');
  return { success: true };
}
