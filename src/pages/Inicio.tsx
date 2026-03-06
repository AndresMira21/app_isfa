import React from 'react';
import './Inicio.css';

const Inicio: React.FC = () => {
  return (
    <div className="inicio-container">
      <div className="inicio-content">
        <h1>Bienvenido a ISFA App</h1>
        <p>Selecciona una opción en el menú superior para comenzar</p>
      </div>
    </div>
  );
};

export default Inicio;
