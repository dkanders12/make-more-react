// components/Supabase/SupabaseController.js
import { createClient } from "@supabase/supabase-js";

export const fetchPostersData = async () => {
  const supabaseUrl = "https://amqdbfnmrgjfasacuigk.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const client = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await client.from("posters").select("name");

  if (error) {
    console.error("Error fetching posters:", error.message);
    return [];
  }
  return data || [];
};
