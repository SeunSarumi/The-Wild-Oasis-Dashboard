import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xgtgscdqivmjojuqiyhi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhndGdzY2RxaXZtam9qdXFpeWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MjIzNjcsImV4cCI6MjAzOTM5ODM2N30.u6B5s7iNIH0bmNxrxP0p86m4RiPI5oA0cnL2YZiI0W0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
