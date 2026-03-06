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

  const cursos: Curso[] = [
    {
      id: '1',
      nombre: 'Transicion ',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0001.jpg'
    },
    {
      id: '2',
      nombre: '1-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0002.jpg'
    },
    {
      id: '3',
      nombre: '2-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0003.jpg'
    },
    {
      id: '4',
      nombre: '3-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0004.jpg'
    },
    {
      id: '5',
      nombre: '3-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0005.jpg'
    },
    {
      id: '6',
      nombre: '4-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0006.jpg'
    },
    {
      id: '7',
      nombre: '4-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0007.jpg'
    },
    {
      id: '8',
      nombre: '4-3',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0008.jpg'
    },
    {
      id: '9',
      nombre: '5-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0009.jpg'
    },
    {
      id: '10',
      nombre: '5-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0010.jpg'
    },
    {
      id: '11',
      nombre: '5-3',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0011.jpg'
    },
    {
      id: '12',
      nombre: '6-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0012.jpg'
    },
    {
      id: '13',
      nombre: '6-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0013.jpg'
    },
    {
      id: '14',
      nombre: '7-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0014.jpg'
    },
    {
      id: '15',
      nombre: '7-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0015.jpg'
    },
    {
      id: '16',
      nombre: '8-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0016.jpg'
    },
    {
      id: '17',
      nombre: '8-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0017.jpg'
    },
    {
      id: '18',
      nombre: '9-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0018.jpg'
    },
    {
      id: '19',
      nombre: '9-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0019.jpg'
    },
    {
      id: '20',
      nombre: '10-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0020.jpg'
    },
    {
      id: '21',
      nombre: '10-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0021.jpg'
    },
    {
      id: '22',
      nombre: '11-1',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0022.jpg'
    },
    {
      id: '23',
      nombre: '11-2',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0023.jpg'
    },
    {
      id: '24',
      nombre: '11-3',
      horario: 'año escolar 2025-2026',
      imagen: 'src/assets/horarios/ilovepdf_pages-to-jpg/1.-HORARIOS-DE-CLASES-2025-2026-Actualizacion-5-de-septiembre_pages-to-jpg-0024.jpg'
    },
  ];

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
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y0ZjRmNCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPgogICAgSW1hZ2VuIG5vIGRpc3BvbmlibGUKICA8L3RleHQ+Cjwvc3ZnPg==';
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
