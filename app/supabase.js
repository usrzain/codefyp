import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bzmjzllnqpprvbtmhowy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6bWp6bGxucXBwcnZidG1ob3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5ODE2NTgsImV4cCI6MjAxMzU1NzY1OH0.dcbug8rYHqxuUNw-BqdCuJNWrW06CYt63dtbESy9TrA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
