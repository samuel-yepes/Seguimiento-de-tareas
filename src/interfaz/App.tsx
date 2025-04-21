import React, { useEffect, useState } from "react";
import { agregarTarea, eliminarTarea, estadoTareas, listarTareas } from "../aplicacion/gestionTareas";
import FormularioTarea from "./componentes/FormularioTarea";
import ListaTareas from "./componentes/ListaTareas";
import { Tarea } from "../dominio/Tarea";
import './componentes/styles.css'


const App: React.FC = () => {
    const [tareas, setTareas] = useState<Tarea[]>([]);

    useEffect(() => {
        setTareas(listarTareas());
    }, []);

    const manejarAgregra = (titulo: string, descripcion: string) => {
        agregarTarea(titulo, descripcion);
        setTareas(listarTareas());
    }

    const manejarEliminar = (id: number) => {
        eliminarTarea(id);
        setTareas(listarTareas());
    }

    const manejarEstado = (id: number) => {
        estadoTareas(id);
        setTareas(listarTareas());
    }

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1>🔥Mis Tareas</h1>
            <FormularioTarea alAgregar={manejarAgregra} />
            <ListaTareas
                tareas={tareas}
                alEliminar={manejarEliminar}
                alCompletar={manejarEstado}
            />
        </div>
    );
};

export default App;