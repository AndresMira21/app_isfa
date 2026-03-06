import React, { useState } from 'react';
import './Horarios.css';

interface Curso {
  id: string;
  nombre: string;
  horario: string;
  imagen: string;
}

const Horarios: React.FC = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<string>('');

  const nombresCursos = [
    'Transicion','1-1','2-1','3-1','3-2','4-1','4-2','4-3',
    '5-1','5-2','5-3','6-1','6-2','7-1','7-2','8-1','8-2',
    '9-1','9-2','10-1','10-2','11-1','11-2','11-3'
  ];

  const cursos: Curso[] = nombresCursos.map((nombre, i) => ({
    id: (i + 1).toString(),
    nombre,
    horario: 'año escolar 2025-2026',
    imagen: `/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-${String(i + 1).padStart(4,'0')}.jpg`
  }));

  const handleCursoChange = (cursoId: string) => {
    setCursoSeleccionado(cursoId);
  };

  const cursoActual = cursos.find(c => c.id === cursoSeleccionado);

  return (
    <div className="horarios-container">
      <h1>Horarios de Cursos</h1>

      <div className="curso-selector">
        <label htmlFor="curso-select">Seleccionar Curso:</label>
        <select
          id="curso-select"
          value={cursoSeleccionado}
          onChange={(e) => handleCursoChange(e.target.value)}
        >
          <option value="">-- Seleccione un curso --</option>
          {cursos.map(curso => (
            <option key={curso.id} value={curso.id}>
              {curso.nombre}
            </option>
          ))}
        </select>
      </div>

      {cursoActual && (
        <div className="horario-detalle">
          <h2>{cursoActual.nombre}</h2>

          <div className="horario-info">
            <p><strong>Horario:</strong> {cursoActual.horario}</p>
          </div>

          <div className="horario-imagen">
            <h3>Imagen del Horario</h3>
            <img
              src={cursoActual.imagen}
              alt={`Horario de ${cursoActual.nombre}`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmNGY0ZjQiLz4KPHRleHQgeD0iMjAwIiB5PSIxNTAiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTkiPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </div>
        </div>
      )}

      {!cursoSeleccionado && (
        <div className="mensaje-inicial">
          <p>Por favor, seleccione un curso para visualizar su horario.</p>
        </div>
      )}
    </div>
  );
};

export default Horarios;