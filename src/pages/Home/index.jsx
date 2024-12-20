import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'

function Home() {
    const [searchValue, setSearchValue] = useState('')
    const [weathers, setWeathers] = useState([])
    const [error, setError] = useState(null)
    
    const API_KEY = '518fa00c7e29922a79c71038e592a966'

    const handleSearch = async () => {
        if (!searchValue.trim()) return
        
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${API_KEY}`
            )
            setWeathers(response.data.weather)
            setError(null)
        } catch (err) {
            setError('Ville non trouvée')
            console.log('Erreur de recherche:', err)
        }
    }

    useEffect(() => {
        const fetchInitialWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${API_KEY}`
                )
                setWeathers(response.data.weather)
            } catch (err) {
                console.log('Erreur lors du chargement initial:', err)
                setError('Erreur de chargement')
            }
        }

        fetchInitialWeather()
    }, [])

    return (
        <div style={styles.mainContainer}>
            <SearchBar
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={handleSearch}
            />
            {error && <p style={styles.error}>{error}</p>}
            <div style={styles.weatherContainer}>
                {weathers?.map((weather) => (
                    <div key={weather.id} style={styles.weatherCard}>
                        <h2 style={styles.weatherTitle}>{weather.main}</h2>
                        <p style={styles.weatherDesc}>{weather.description}</p>
                        <img 
                            src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                            alt={weather.description}
                            style={styles.weatherIcon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

const styles = {
    mainContainer: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    error: {
        color: '#ff4444',
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '16px',
        fontWeight: 'bold'
    },
    weatherContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        padding: '40px 20px',
        marginTop: '20px'
    },
    weatherCard: {
        padding: '25px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        textAlign: 'center',
        minWidth: '250px',
        transition: 'transform 0.2s ease-in-out'
    },
    weatherTitle: {
        fontSize: '24px',
        color: '#333',
        marginBottom: '10px',
        fontWeight: '600'
    },
    weatherDesc: {
        fontSize: '16px',
        color: '#666',
        margin: '10px 0'
    },
    weatherIcon: {
        width: '64px',
        height: '64px',
        marginTop: '10px'
    }
}

export default Home