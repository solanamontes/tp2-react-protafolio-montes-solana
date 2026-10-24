function ProjectCard({ nombre, descripcion, onEliminar, onModificar }) {
  return (
    <div className="project-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>

      <button type="button" onClick={onEliminar}>
        Eliminar
      </button>

      <button type="button" onClick={onModificar}>
        Modificar
      </button>
    </div>
  );
}

export default ProjectCard;