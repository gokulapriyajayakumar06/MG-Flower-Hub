console.log("supabase.js file loaded!");

const SUPABASE_URL = "https://yzuvgsognrqpmoovaddd.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_B5XKiyZMLuWoQXKX-CBNNA_-HRgm3lF";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase client created!");