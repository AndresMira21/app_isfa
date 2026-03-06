import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import './Navbar.css';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>ISFA App</h1>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <button 
            onClick={() => navigateTo('/horarios')}
            className="nav-button"
          >
            📚 Horarios
          </button>
          <button 
            onClick={() => navigateTo('/calendario')}
            className="nav-button"
          >
            📅 Calendario
          </button>
          <button 
            onClick={() => navigateTo('/docentes')}
            className="nav-button"
          >
            👥 Docentes
          </button>
          <button 
            onClick={handleLogout}
            className="nav-button logout"
          >
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
