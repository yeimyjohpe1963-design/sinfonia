import { useNavigate, useOutletContext } from "react-router-dom";
import { useAlbumes } from "../../hooks/useAlbumes.js";
import { useGeneros } from "../../hooks/useGeneros.js";

import HeroSintonia from "../../components/HeroSintonia/HeroSintonia.jsx";
import SeccionAlbumes from "../../components/SeccionesAlbumes/SeccionesAlbumes.jsx";
import SeccionGeneros from "../../components/SeccionGeneros/SeccionGeneros.jsx";
import InvitacionRegistro from "../../components/InvitacionRegistro/InvitacionRegistro.jsx";
import "./Inicio.css";

export default function Inicio() {
  // Recibe los datos globales que ahora viven en LayoutPublico
  const { datos } = useOutletContext();
  const navigate = useNavigate();

  const seleccionarAlbum = (album) => {
    if (typeof album?.id === "string" && album.id) {
      navigate(`/albumes/${encodeURIComponent(album.id)}`);
    }
  };

  const {
    albumes,
    cargando: cargandoAlbumes,
    error: errorAlbumes,
    recargar: recargarAlbumes,
  } = useAlbumes();
  const {
    generos,
    cargando: cargandoGeneros,
    error: errorGeneros,
    recargar: recargarGeneros,
  } = useGeneros();

  return (
    <main className="pagina-inicio">
      <HeroSintonia
        {...datos}
        totalGeneros={generos.length}
      />
      <SeccionAlbumes
        {...datos}
        albumes={albumes}
        cargando={cargandoAlbumes}
        error={errorAlbumes}
        recargar={recargarAlbumes}
        filaHorizontalMovil
        onSeleccionar={seleccionarAlbum}
      />
      <SeccionGeneros
        {...datos}
        generos={generos}
        cargando={cargandoGeneros}
        error={errorGeneros}
        recargar={recargarGeneros}
      />
      <InvitacionRegistro {...datos} />
    </main>
  );
}