import { useState, useEffect } from "react";
import { supabase } from "../backend/Client";

export const fetchDealers = async () => {
  const { data, error } = await supabase
    .from("consecionarios")
    .select()
    .eq("is_Active", true);

  if (error) throw error;
  return data;
};
