"use server";

import { supabase } from '@/lib/supabase';
import { revalidateTag } from 'next/cache';

export async function submitLead(data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}) {
  const { error } = await supabase.from('contact_leads').insert([data]);
  
  // We throw the error so the client component can catch and display it
  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error(error.message);
  }
  
  // Background invalidation of any components tracking 'leads' 
  // (e.g. if we had a dashboard or 'recent clients' widget)
  revalidateTag('leads', 'hours');
}
