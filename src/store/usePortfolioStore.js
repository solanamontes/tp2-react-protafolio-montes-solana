import { create } from "zustand";

export const usePortfolioStore= create((set)=>({
    habilidades:[
        "HTML",
        "CSS",
        "Javascript",
        "React"
    ],
      proyectos: [
    {
      nombre: "Tienda de discos",
      Descripcion: "Página web para mostrar productos y realizar compras."
    },
    {
      nombre: "Tienda de Artesanías",
      Descripcion: "Aplicación para gestionar productos, clientes y órdenes."
    },
    {
      nombre:"Tienda de ropa",
      Descripcion:"Aplicacion de gestion de stock "
    }
  ],
     agregarProyecto: (nuevoProyecto) =>
    set((state) => ({
      proyectos: [...state.proyectos, nuevoProyecto]
    })),
   
    modificarProyecto: (nombreOriginal, datosActualizados) =>
  set((state) => ({
    proyectos: state.proyectos.map((proyecto) =>
      proyecto.nombre === nombreOriginal
        ? { ...proyecto, ...datosActualizados }
        : proyecto
    )
  })),

 eliminarProyecto: (nombre) =>
  set((state) => ({
    proyectos: state.proyectos.filter(
      (proyecto) => proyecto.nombre !== nombre
    )
}))


}));