import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const configuredUrl = supabaseUrl && !supabaseUrl.includes('PASTE_') ? supabaseUrl : 'https://placeholder.supabase.co'
const configuredKey = supabaseAnonKey && !supabaseAnonKey.includes('PASTE_') ? supabaseAnonKey : 'placeholder-anon-key'

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('PASTE_'))

export const supabase = createClient(
  configuredUrl,
  configuredKey,
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } },
)
