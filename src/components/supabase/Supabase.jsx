// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xlabrfblnrbgsneltjzp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWJyZmJsbnJiZ3NuZWx0anpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjQ0OTM2OSwiZXhwIjoyMDYyMDI1MzY5fQ.UkOrLcZf6x-PlMKiFo9U8VLXYcn1RlKVOSxgi7XxkGY';

export const supabase = createClient(supabaseUrl, supabaseKey);
