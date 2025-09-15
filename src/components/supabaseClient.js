import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://xlabrfblnrbgsneltjzp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWJyZmJsbnJiZ3NuZWx0anpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDkzNjksImV4cCI6MjA2MjAyNTM2OX0.Os7eBInXY3eYMV1uUNm7x9XiLYjL2Neq4d8Yv9X7Gcw';

export const supabase = createClient(supabaseUrl, supabaseKey);