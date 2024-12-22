import React, { useState } from 'react';
import { FaMapMarkerAlt, FaWater, FaWind } from 'react-icons/fa';
import Cloud from '../../assets/Cloud.jpg';
import Sun from '../../assets/sun.jpg';
import Rain from '../../assets/rain.jpg';
import Snow from '../../assets/snow.jpg';
import Sunset from '../../assets/sunset.jpg';
import ErrorImage from '../../assets/error.jpg';

function SearchBar() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const APIkey = '518fa00c7e29922a79c71038e592a966';

  const getWeatherImage = (weatherMain) => {
    const weatherImages = {
      Clear: Sun,
      Rain: Rain,
      Snow: Snow,
      Clouds: Cloud,
      Sunset: Sunset,
    };
    return weatherImages[weatherMain] || Cloud;
  };

  const searchWeather = async () => {
    if (!city) {
      setError('Veuillez entrer un nom de ville.');
      setWeatherData(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}&lang=fr`
      );
      if (!response.ok) throw new Error('Ville non trouvée');
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchWeather();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.searchSection}>
          <div style={styles.inputWrapper}>
            <FaMapMarkerAlt style={styles.icon} />
            <input
              type="text"
              placeholder="Entrez un lieu..."
              style={styles.input}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          <button 
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer'
            }} 
            onClick={searchWeather} 
            disabled={loading}
          >
            {loading ? 'Recherche...' : 'Rechercher'}
          </button>
        </div>

        {loading && <p style={styles.message}>Chargement...</p>}
        
        {error && (
          <div style={styles.error}>
            <img src={ErrorImage} alt="Erreur" style={styles.errorImage} />
            <p style={styles.errorText}>{error}</p>
          </div>
        )}
        
        {weatherData && !error && (
          <div style={styles.weather}>
            <img 
              src={getWeatherImage(weatherData.weather[0].main)} 
              alt={weatherData.weather[0].description} 
              style={styles.weatherImage} 
            />
            <div style={styles.weatherInfo}>
              <p style={styles.temperature}>
                {Math.round(weatherData.main.temp)}
                <span style={styles.celsiusUnit}>°C</span>
              </p>
              <p style={styles.description}>
                {weatherData.weather[0].description}
              </p>
            </div>
            <div style={styles.details}>
              <div style={styles.detailItem}>
                <FaWater style={styles.detailIcon} />
                <div style={styles.detailText}>
                  <span style={styles.detailValue}>{weatherData.main.humidity}%</span>
                  <span style={styles.detailLabel}>Humidité</span>
                </div>
              </div>
              <div style={styles.detailItem}>
                <FaWind style={styles.detailIcon} />
                <div style={styles.detailText}>
                  <span style={styles.detailValue}>
                    {Math.round(weatherData.wind.speed * 3.6)} km/h
                  </span>
                  <span style={styles.detailLabel}>Vent</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'transparent',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    color: 'white',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '500px',
    padding: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
  },
  searchSection: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
  },
  inputWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '0 15px',
  },
  icon: {
    fontSize: '20px',
    color: '#007bff',
    marginRight: '10px',
  },
  input: {
    flex: 1,
    padding: '12px 0',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '16px',
  },
  error: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginTop: '30px',
  },
  errorImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '15px',
  },
  errorText: {
    color: '#ff4444',
    fontSize: '16px',
    fontWeight: '500',
  },
  weather: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  weatherImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '15px',
  },
  weatherInfo: {
    textAlign: 'center',
  },
  temperature: {
    fontSize: '48px',
    fontWeight: '700',
    margin: '0',
    position: 'relative',
    display: 'inline-block',
  },
  celsiusUnit: {
    position: 'absolute',
    fontSize: '24px',
    top: '8px',
    marginLeft: '5px',
  },
  description: {
    fontSize: '20px',
    margin: '10px 0 0',
    textTransform: 'capitalize',
    opacity: 0.9,
  },
  details: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  detailIcon: {
    fontSize: '24px',
    color: '#007bff',
  },
  detailText: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailValue: {
    fontSize: '18px',
    fontWeight: '600',
  },
  detailLabel: {
    fontSize: '14px',
    opacity: 0.8,
  },
};

export default SearchBar;