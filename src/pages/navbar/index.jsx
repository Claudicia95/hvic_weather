import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          WEATHER APP
        </div>
        <div style={styles.linkContainer}>
          <Link to="/" style={styles.link}>Accueil</Link>
          <Link to="/service" style={styles.link}>À propos</Link>
          <div style={styles.authLinks}>
            <Link to="/signin" style={styles.signInLink}>Connectez-vous</Link>
            <Link to="/signup" style={styles.signUpLink}>S'inscrire</Link>
          </div>
        </div>
      </nav>   
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
    padding: '0 20px'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007bff',
    letterSpacing: '1px'
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  },
  link: {
    padding: '8px 12px',
    textDecoration: 'none',
    color: '#2c3e50',
    fontWeight: 500,
    fontSize: '16px',
    transition: 'all 0.3s ease',
    borderRadius: '6px',
    ':hover': {
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      color: '#007bff'
    }
  },
  authLinks: {
    display: 'flex',
    gap: '1rem',
    marginLeft: '2rem',
    alignItems: 'center'
  },
  signInLink: {
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 500,
    fontSize: '16px',
    transition: 'all 0.3s ease',
    borderRadius: '6px',
    border: '1px solid #007bff',
    ':hover': {
      backgroundColor: 'rgba(0, 123, 255, 0.1)'
    }
  },
  signUpLink: {
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 500,
    fontSize: '16px',
    transition: 'all 0.3s ease',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    ':hover': {
      backgroundColor: '#0056b3'
    }
  }
}

export default Navbar