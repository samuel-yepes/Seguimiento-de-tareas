import React, { useState } from "react";
import './styles.css';

interface Props {
  alAgregar: (titulo: string, descripcion: string) => void;
}

const FormularioTarea: React.FC<Props> = ({ alAgregar }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    if (titulo.trim() === "") {
      alert("El título es obligatorio");
      return;
    }

    alAgregar(titulo, descripcion);
    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="form-container">
      <form onSubmit={manejarEnvio} className="form">
        <div className="input-group">
          <label className="label">Título:</label><br />
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Descripción:</label><br />
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="textarea"
          />
        </div>
        <button type="submit" className="button">Agregar tarea</button>
      </form>
    </div>
  );

};

export default FormularioTarea;
