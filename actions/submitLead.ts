"use server";

import { supabase } from '@/lib/supabase';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое").max(100),
  phone: z.string().min(10, "Некорректный номер телефона").max(20),
  email: z.string().email("Некорректный email").or(z.literal("")),
  service: z.string().min(1, "Выберите услугу"),
  message: z.string().max(1000).optional(),
  website: z.string().max(0, "Bot detected").optional(), // Honeypot: must be empty
});

export async function submitLead(rawData: unknown) {
  // 1. Validate data with Zod
  const validated = leadSchema.safeParse(rawData);
  
  if (!validated.success) {
    const errorMsg = validated.error.errors[0]?.message || "Ошибка валидации";
    console.warn("Lead validation failed:", validated.error.format());
    throw new Error(errorMsg);
  }

  const { website, ...data } = validated.data;

  // 2. Insert into Supabase
  const { error } = await supabase.from('contact_leads').insert([data]);
  
  if (error) {
    console.error("Supabase insert error:", error);
    // Don't leak DB internal errors to the client
    throw new Error("Не удалось сохранить заявку. Пожалуйста, попробуйте позже.");
  }
  
  revalidateTag('leads');
}
