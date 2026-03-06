import React, { useState } from 'react';
import './Docentes.css';

interface Docente {
  id: string;
  nombre: string;
  materia: string;
  correo: string;
  foto?: string;
}

const Docentes: React.FC = () => {
  const [docentes, setDocentes] = useState<Docente[]>([
    {
      id: '1',
      nombre: 'Dr. Juan Pérez',
      materia: 'Matemáticas',
      correo: 'juan.perez@isfa.edu',
      foto: ''
    },
    {
      id: '2',
      nombre: 'Dra. María González',
      materia: 'Física',
      correo: 'maria.gonzalez@isfa.edu',
      foto: ''
    },
    {
      id: '3',
      nombre: 'Lic. Carlos Rodríguez',
      materia: 'Química',
      correo: 'carlos.rodriguez@isfa.edu',
      foto: ''
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [editando, setEditando] = useState<string | null>(null);
  const [nuevoDocente, setNuevoDocente] = useState<Partial<Docente>>({
    nombre: '',
    materia: '',
    correo: '',
    foto: ''
  });

  const handleAgregarDocente = () => {
    if (nuevoDocente.nombre && nuevoDocente.materia && nuevoDocente.correo) {
      if (editando) {
        setDocentes(docentes.map(doc => 
          doc.id === editando 
            ? { ...doc, ...nuevoDocente as Docente }
            : doc
        ));
        setEditando(null);
      } else {
        const docente: Docente = {
          id: Date.now().toString(),
          nombre: nuevoDocente.nombre,
          materia: nuevoDocente.materia,
          correo: nuevoDocente.correo,
          foto: nuevoDocente.foto || ''
        };
        setDocentes([...docentes, docente]);
      }
      setNuevoDocente({ nombre: '', materia: '', correo: '', foto: '' });
      setMostrarFormulario(false);
    }
  };

  const handleEditar = (docente: Docente) => {
    setNuevoDocente(docente);
    setEditando(docente.id);
    setMostrarFormulario(true);
  };

  const handleEliminar = (id: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar este docente?')) {
      setDocentes(docentes.filter(doc => doc.id !== id));
    }
  };

  const getPlaceholderImage = (nombre: string) => {
    const iniciales = nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#667eea"/>
        <text x="50" y="50" font-family="Arial" font-size="36" fill="white" text-anchor="middle" dominant-baseline="middle">
          ${iniciales}
        </text>
      </svg>
    `)}`;
  };

  return (
    <div className="docentes-container">
      <h1>Docentes de la Institución</h1>
      
      <div className="docentes-header">
        <button 
          onClick={() => {
            setNuevoDocente({ nombre: '', materia: '', correo: '', foto: '' });
            setEditando(null);
            setMostrarFormulario(true);
          }}
          className="btn-agregar"
        >
          + Registrar Nuevo Docente
        </button>
      </div>

      <div className="docentes-grid">
        {docentes.map(docente => (
          <div key={docente.id} className="docente-card">
            <div className="docente-foto">
              <img 
                src={docente.foto || getPlaceholderImage(docente.nombre)}
                alt={docente.nombre}
              />
            </div>
            <div className="docente-info">
              <h3>{docente.nombre}</h3>
              <p className="materia">📚 {docente.materia}</p>
              <p className="correo">✉️ {docente.correo}</p>
            </div>
            <div className="docente-actions">
              <button 
                onClick={() => handleEditar(docente)}
                className="btn-editar"
              >
                ✏️ Editar
              </button>
              <button 
                onClick={() => handleEliminar(docente.id)}
                className="btn-eliminar"
              >
                🗑️ Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {docentes.length === 0 && (
        <div className="mensaje-vacio">
          <p>No hay docentes registrados. Haz clic en "Registrar Nuevo Docente" para añadir el primero.</p>
        </div>
      )}

      {mostrarFormulario && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editando ? 'Editar Docente' : 'Registrar Nuevo Docente'}</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAgregarDocente(); }}>
              <div className="form-group">
                <label>Nombre Completo:</label>
                <input
                  type="text"
                  value={nuevoDocente.nombre}
                  onChange={(e) => setNuevoDocente({...nuevoDocente, nombre: e.target.value})}
                  required
                  placeholder="Ej: Dr. Juan Pérez"
                />
              </div>
              <div className="form-group">
                <label>Materia:</label>
                <input
                  type="text"
                  value={nuevoDocente.materia}
                  onChange={(e) => setNuevoDocente({...nuevoDocente, materia: e.target.value})}
                  required
                  placeholder="Ej: Matemáticas"
                />
              </div>
              <div className="form-group">
                <label>Correo Institucional:</label>
                <input
                  type="email"
                  value={nuevoDocente.correo}
                  onChange={(e) => setNuevoDocente({...nuevoDocente, correo: e.target.value})}
                  required
                  placeholder="Ej: juan.perez@isfa.edu"
                />
              </div>
              <div className="form-group">
                <label>URL de la Foto (opcional):</label>
                <input
                  type="url"
                  value={nuevoDocente.foto}
                  onChange={(e) => setNuevoDocente({...nuevoDocente, foto: e.target.value})}
                  placeholder="https://ejemplo.com/foto.jpg"
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="btn-guardar">
                  {editando ? 'Actualizar' : 'Guardar'}
                </button>
                <button type="button" onClick={() => setMostrarFormulario(false)} className="btn-cancelar">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Docentes;
