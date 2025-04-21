import './styles.css'

interface Tarea{
    id: number;
    titulo: string;
    descripcion: string;
    completada: boolean;
}

interface Props{
    tareas: Tarea[];
    alEliminar: (id: number) => void;
    alCompletar: (id: number) => void;
}

const ListaTareas: React.FC<Props> = ({ tareas, alEliminar, alCompletar}) => {
    return (
      <div>
        <h2>Lista de Tareas</h2>
        {tareas.length === 0 && <p className='parrafoContainer'>No hay tareas aún.</p>}
        <ul>
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              style={{
                marginBottom: "10px",
                backgroundColor: tarea.completada ? "#d3ffd3" : "rgb(167 167 167)",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h3 style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
                {tarea.titulo}
              </h3>
              <p>{tarea.descripcion}</p>
              <button className='btn-complet' onClick={() => alCompletar(tarea.id)}>
                {tarea.completada ? "Desmarcar" : "Marcar como completada"}
              </button>
              <button className='btn-delete' onClick={() => alEliminar(tarea.id)} style={{ marginLeft: "10px" }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
};  

export default ListaTareas;