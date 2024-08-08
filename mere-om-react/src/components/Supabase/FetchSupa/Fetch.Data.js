import { createClient } from "@supabase/supabase-js";

export const fetchMusicData = async () => {
  const supabaseUrl = "https://ywngicbnevnlnjsihxcj.supabase.co";
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;
  const client = createClient(supabaseUrl, supabaseAnonKey);
  const { data, error } = await client.from("posters").select("name");

  if (error) {
    console.error("Error fetching posters:", error.message);
    return [];
  }
  return data || [];
};
