import { Tarea } from "../dominio/Tarea";
import { v4 as generarId } from "uuid";
import { guardarTareas, obtenerTareas } from "../infraestructura/almacenamientoTareas";

export function listarTareas(): Tarea[] {
    return obtenerTareas();
}

export function agregarTarea(titulo: string, descripcion: string): Tarea {
    const nuevaTarea: Tarea = {
        id: generarId(),
        titulo,
        descripcion,
        completada: false,
    };

    const tareas = obtenerTareas();
    const tareasActualizadas = [...tareas, nuevaTarea];
    guardarTareas(tareasActualizadas);

    return nuevaTarea;
}

export function eliminarTarea(id: number): void{
    const tareas = obtenerTareas();
    const tareasFiltradas = tareas.filter(t => t.id !== id);
    guardarTareas(tareasFiltradas);
}


export function estadoTareas(id: number): void{
    const tareas = obtenerTareas();
    const actualizadas = tareas.map(t =>
        t.id === id ? {...t, completada: !t.completada} : t
    );
    guardarTareas(actualizadas);
}
