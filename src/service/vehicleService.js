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

export const createTestDrive = async (formTestDrive) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("test_drive")
    .insert({
      id_user: user.id,
      id_vehicle: formTestDrive.id_vehicle,
      fecha_asignada: formTestDrive.date,
      hora_asignada: formTestDrive.time,
      experiencia: formTestDrive.experience,
    })
    .select();
  if (error) {
    console.log("Error al crear el test Drive", error);
    throw error;
  }
  return data;
};

export const getTestDrive = async () => {
  const { data, error } = await supabase
    .from("test_drive")
    .select("*, id_vehicle(*)");
  if (error) {
    console.log("error en getTest", error);
  }
  return data;
};
