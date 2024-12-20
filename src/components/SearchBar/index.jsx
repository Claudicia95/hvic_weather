import React from 'react'
import rainy from '../../assets/rainy.jpg'

function SearchBar({value, onChange, onSearch}) {
  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.SearchBarContaniner}>
        <input 
          style={styles.TextRecherche}
          type="text"
          placeholder="Votre recherche..."
          value={value}
          onChange={onChange}
        />
        <div>
          <button onClick={onSearch} style={styles.bttSearch}>
            Recherche
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar

const styles = {
  backgroundContainer: {
    backgroundImage: `url(${rainy})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight:'600px'
  },

  bttSearch: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    height: '100%'
  },

  TextRecherche: {
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px 0 0 4px',
    width: '300px',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },

  SearchBarContaniner: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
}