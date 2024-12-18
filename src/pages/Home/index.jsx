import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div WeatherContainer>
      <div LinkStyle>
        <Link to='/home' style={styles.Home}> Accueil</Link>
        <Link to='/service' style={styles.Propos}> A propos </Link>
        <Link to='/signin' style={styles.Connexion}>Connectez-vous</Link>
        <Link to='signup'style={styles.Signup}>S'incrire</Link>       
      </div>   
    </div>
  )
}

export default Home

const styles ={
  Home:{
  padding:'12px',
},
}


