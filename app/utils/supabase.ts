import {SUPABASE_ANON_PUBLIC_APIKEY, SUPABASE_PROJECT_URL} from '@env';
import {SupabaseClient, createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = SUPABASE_PROJECT_URL;
const supabaseAnonKey = SUPABASE_ANON_PUBLIC_APIKEY;

export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage: AsyncStorage as any,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);
