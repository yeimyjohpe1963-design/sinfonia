import { useEffect, useState } from "react";

const API = String(import.meta.env.VITE_API_BASE_URL).replace(/\/+$/, "");


export function useGeneros() {
  const [generos, setGeneros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let activo = true;

    async function cargar() {
      try {
        const respuesta = await fetch(`${API}/generos`);
        if (!respuesta.ok) throw new Error(respuesta.status);
        const json = await respuesta.json();
        if (activo) setGeneros(json.datos ?? []);
      } catch {
        if (activo) setError(true);
      } finally {
        if (activo) setCargando(false);
      }
    }

    cargar();
    return () => {
      activo = false;
    };
  }, []);

  return { generos, cargando, error };
}