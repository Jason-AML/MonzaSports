import { supabase } from "../backend/Client";

export const getVehicle = async () => {
  const { data, error } = await supabase.from("vehiculos").select(`
      *,
      fabricas (
        id,
        pais,
        ciudad,
        nombre_planta,
        fabricante
      )
    `);

  if (error) {
    console.error("Error al obtener vehiculos", error);
    throw error;
  }

  return data;
};

export const getVehicleById = async (id) => {
  const { data, error } = await supabase
    .from("vehiculos")
    .select("*, fabricas(*)")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

export const getMarcas = async () => {
  const { data, error } = await supabase
    .from("fabricas")
    .select("id,fabricante");
  if (error) {
    throw error;
  }
  return data;
};
