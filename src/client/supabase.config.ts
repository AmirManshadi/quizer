import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_PROJECT_URL as string;
const apiKey = import.meta.env.VITE_API_KEY as string;

const supabase = createClient(url, apiKey);

export default supabase;
