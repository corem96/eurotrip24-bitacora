import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://xantpelmzshrdamgkspk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbnRwZWxtenNocmRhbWdrc3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MTYxMzQsImV4cCI6MjAzODI5MjEzNH0.MMz1t5OIpgMOHmeoFcLUvZRN9KSHBskIvbbQDjGh_Xo'
)
