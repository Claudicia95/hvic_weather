import React from 'react';
import rainy from '../../assets/rainy.jpg';
import SearchBar from '../../components/SearchBar';

function Home() {
  return (
    <div style={HomeContainer}>
      <SearchBar />
    </div>
  );
}

export default Home;

const HomeContainer = {
  backgroundImage: `url(${rainy})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '600px',
};
