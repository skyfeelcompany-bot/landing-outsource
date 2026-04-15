import { createClient } from '@supabase/supabase-js';

// We fallback to empty strings to avoid breaking the build if the env vars are missing initially.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);
