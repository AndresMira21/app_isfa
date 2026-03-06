import React, { useState } from 'react';
import './Calendario.css';

interface Actividad {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  tipo: 'examen' | 'tarea' | 'proyecto' | 'otro';
}

const Calendario: React.FC = () => {
  const [actividades, setActividades] = useState<Actividad[]>([
    {
      id: '1',
      titulo: 'Examen de Matemáticas',
      descripcion: 'Cálculo diferencial e integral',
      fecha: '2026-03-15',
      tipo: 'examen'
    },
    {
      id: '2',
      titulo: 'Entrega de Proyecto',
      descripcion: 'Proyecto final de Física',
      fecha: '2026-03-20',
      tipo: 'proyecto'
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevaActividad, setNuevaActividad] = useState<Partial<Actividad>>({
    titulo: '',
    descripcion: '',
    fecha: '',
    tipo: 'otro'
  });

  const obtenerDiasMes = () => {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = fecha.getMonth();
    const primerDia = new Date(año, mes, 1);
    const ultimoDia = new Date(año, mes + 1, 0);
    const diasMes = ultimoDia.getDate();
    const diaSemanaInicio = primerDia.getDay();

    const dias = [];
    for (let i = 0; i < diaSemanaInicio; i++) {
      dias.push(null);
    }
    for (let i = 1; i <= diasMes; i++) {
      dias.push(i);
    }
    return dias;
  };

  const obtenerNombreMes = () => {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[new Date().getMonth()];
  };

  const obtenerActividadesDia = (dia: number) => {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = fecha.getMonth();
    const fechaStr = `${año}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
    return actividades.filter(act => act.fecha === fechaStr);
  };

  const handleAgregarActividad = () => {
    if (nuevaActividad.titulo && nuevaActividad.fecha) {
      const actividad: Actividad = {
        id: Date.now().toString(),
        titulo: nuevaActividad.titulo,
        descripcion: nuevaActividad.descripcion || '',
        fecha: nuevaActividad.fecha,
        tipo: nuevaActividad.tipo as Actividad['tipo']
      };
      setActividades([...actividades, actividad]);
      setNuevaActividad({ titulo: '', descripcion: '', fecha: '', tipo: 'otro' });
      setMostrarFormulario(false);
    }
  };

  const getTipoColor = (tipo: Actividad['tipo']) => {
    switch (tipo) {
      case 'examen': return '#ff4444';
      case 'tarea': return '#4444ff';
      case 'proyecto': return '#44ff44';
      default: return '#ffaa44';
    }
  };

  const dias = obtenerDiasMes();

  return (
    <div className="calendario-container">
      <h1>Calendario de Actividades - {obtenerNombreMes()} {new Date().getFullYear()}</h1>
      
      <div className="calendario-header">
        <button 
          onClick={() => setMostrarFormulario(true)}
          className="btn-agregar"
        >
          + Añadir Actividad
        </button>
      </div>

      <div className="calendario-grid">
        <div className="dias-semana">
          <div>Dom</div>
          <div>Lun</div>
          <div>Mar</div>
          <div>Mié</div>
          <div>Jue</div>
          <div>Vie</div>
          <div>Sáb</div>
        </div>
        <div className="dias-mes">
          {dias.map((dia, index) => (
            <div key={index} className={`dia ${dia ? 'dia-valido' : 'dia-vacio'}`}>
              {dia && (
                <>
                  <div className="dia-numero">{dia}</div>
                  <div className="actividades-dia">
                    {obtenerActividadesDia(dia).map(act => (
                      <div 
                        key={act.id} 
                        className="actividad-item"
                        style={{ backgroundColor: getTipoColor(act.tipo) }}
                        title={act.titulo}
                      >
                        {act.titulo.substring(0, 10)}...
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="actividades-lista">
        <h2>Actividades del Mes</h2>
        {actividades.length === 0 ? (
          <p>No hay actividades programadas este mes.</p>
        ) : (
          <div className="actividades-grid">
            {actividades.map(act => (
              <div key={act.id} className="actividad-card">
                <div className="actividad-header">
                  <h3>{act.titulo}</h3>
                  <span 
                    className="actividad-tipo"
                    style={{ backgroundColor: getTipoColor(act.tipo) }}
                  >
                    {act.tipo}
                  </span>
                </div>
                <p className="actividad-descripcion">{act.descripcion}</p>
                <p className="actividad-fecha">📅 {act.fecha}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {mostrarFormulario && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Añadir Nueva Actividad</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAgregarActividad(); }}>
              <div className="form-group">
                <label>Título:</label>
                <input
                  type="text"
                  value={nuevaActividad.titulo}
                  onChange={(e) => setNuevaActividad({...nuevaActividad, titulo: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Descripción:</label>
                <textarea
                  value={nuevaActividad.descripcion}
                  onChange={(e) => setNuevaActividad({...nuevaActividad, descripcion: e.target.value})}
                  rows={3}
                />
              </div>
              <div className="form-group">
                <label>Fecha:</label>
                <input
                  type="date"
                  value={nuevaActividad.fecha}
                  onChange={(e) => setNuevaActividad({...nuevaActividad, fecha: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tipo:</label>
                <select
                  value={nuevaActividad.tipo}
                  onChange={(e) => setNuevaActividad({...nuevaActividad, tipo: e.target.value as Actividad['tipo']})}
                >
                  <option value="examen">Examen</option>
                  <option value="tarea">Tarea</option>
                  <option value="proyecto">Proyecto</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="btn-guardar">Guardar</button>
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

export default Calendario;
