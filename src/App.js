import React from 'react';
import './Components/pokemon.css';
import PokeGallery from './Components/PokeGallery';
import * as pokemons from './poke.json';
import logo from './assets/pokelogo.png';

const App = (props) => {
  return (
    <div>
      <img src={logo} alt={logo} className='logo' />
      <PokeGallery pokemons={pokemons.default.slice(0, 15)} />
    </div>
  );
};

export default App;
