
import { useState } from "react";
import { usePortfolioStore } from "../store/usePortfolioStore";

function Projects() {
  const proyectos = usePortfolioStore((state) => state.proyectos);
  const agregarProyecto = usePortfolioStore((state) => state.agregarProyecto);
  const eliminarProyecto = usePortfolioStore(
  (state) => state.eliminarProyecto
);
const modificarProyecto = usePortfolioStore(
  (state) => state.modificarProyecto
);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (nombre.trim() === "" || descripcion.trim() === "") {
      alert("Completá todos los campos");
      return;
    }

    const nuevoProyecto = {
      nombre: nombre,
      Descripcion: descripcion
    };

    agregarProyecto(nuevoProyecto);

    setNombre("");
    setDescripcion("");
  }
  function handleModificar(proyecto) {
  
    const nuevoNombre = prompt(
    "Nuevo nombre:",
    proyecto.nombre
  );

  if (nuevoNombre === null) return;

  const nuevaDescripcion = prompt(
    "Nueva descripción:",
    proyecto.Descripcion
  );

  if (nuevaDescripcion === null) return;

  if (
    nuevoNombre.trim() === "" ||
    nuevaDescripcion.trim() === ""
  ) {
    alert("Los campos no pueden estar vacíos");
    return;
  }

  modificarProyecto(proyecto.nombre, {
    nombre: nuevoNombre.trim(),
    Descripcion: nuevaDescripcion.trim()
  });
}

  return (
    <section>
      <h2>Mis proyectos</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del proyecto"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />

        <input
          type="text"
          placeholder="Descripción del proyecto"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
        />

        <button type="submit">Agregar proyecto</button>
      </form>

      {proyectos.map((proyecto, index) => (
        <div key={index}>
          <h3>{proyecto.nombre}</h3>
          <p>{proyecto.Descripcion}</p>
             <button
                type="button"
                onClick={() => eliminarProyecto(proyecto.nombre)}
                >
                Eliminar
            </button>
            <button type="button"
            onClick={()=>handleModificar(proyecto)}>
            Modificar
            </button>
        </div>
      ))}
    </section>
  );
}

export default Projects;

