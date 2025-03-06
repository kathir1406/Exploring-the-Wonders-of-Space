import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
import './Nav.css';
import logo from './assets/logo.png'; // Ensure the logo is in the correct directory

export default function Nav() {
  const auth = useAuth();

  return (
    <header className="nav-header">
      
      
      <nav className="nav-bar">
      <img src={logo} alt="Space Logo" className="nav-logo" />
      <h1 className="nav-heading">Exploring the Wonders of Space</h1>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/planets" className="nav-link">Planets</NavLink>
        <NavLink to="/missions" className="nav-link">Missions</NavLink>
        <NavLink to="/discoveries" className="nav-link">Discoveries</NavLink>
        <NavLink to="/chatbot" className="nav-link">Chatbot</NavLink>
        {!auth.user && <NavLink to="/login" className="nav-link">Login</NavLink>}
        {!auth.user && <NavLink to="/signup" className="nav-link"> Signup</NavLink>}
        {auth.user && <NavLink to="/profile" className="nav-link">👤 Profile</NavLink>}
      </nav>
    </header>
  );
}
