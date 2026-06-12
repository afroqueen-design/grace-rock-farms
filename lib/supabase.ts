import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export function getProductImageUrl(imageFilename: string | null) {
  if (!supabase || !imageFilename) {
    return "";
  }

  const { data } = supabase.storage
    .from("Products")
    .getPublicUrl(imageFilename);

  return data.publicUrl;
}
