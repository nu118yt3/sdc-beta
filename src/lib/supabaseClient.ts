import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://otwrtozawlasbaisajoe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90d3J0b3phd2xhc2JhaXNham9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MDYwMjAsImV4cCI6MjA1NDI4MjAyMH0.loHlT_DIXPq7f7rjzPBHT3NIM1oIV2dX4GjNfat0KEk';
export const supabase = createClient(supabaseUrl, supabaseKey);