import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div logo>
          LOGO
        </div>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/service" style={styles.link}>À propos</Link>
        <Link to="/signin" style={styles.link}>Connectez-vous</Link>
        <Link to="/signup" style={styles.link}>S'inscrire</Link>       
      </nav>   
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center'
  },
  link: {
    padding: '12px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
    transition: 'color 0.2s ease',
    ':hover': {  // Note: ceci ne fonctionnera pas directement avec style={} - il faudrait utiliser une librairie comme styled-components
      color: '#007bff'
    }
  }
}

export default Navbar