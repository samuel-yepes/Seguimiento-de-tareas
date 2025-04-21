import { Tarea } from "../dominio/Tarea";

 

 const ClaveLocal = "mis_tareas";

 export function obtenerTareas(): Tarea[] {
    const datos = localStorage.getItem(ClaveLocal);
    if(!datos) return [];
    return JSON.parse(datos) as Tarea[];
 }

 export function guardarTareas(tareas: Tarea[]): void{
    localStorage.setItem(ClaveLocal, JSON.stringify(tareas));
 }
