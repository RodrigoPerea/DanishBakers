import { supabase } from "./supabaseClient";
export const getProducts = async () => {
  const { data, error } = await supabase.from("sortement").select("*");

  if (error) return;
  return data;
};
