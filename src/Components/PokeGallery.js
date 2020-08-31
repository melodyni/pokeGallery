import React from 'react';
import Pokemon from './Pokemon.js';
import './pokemon.css';

const PokeGallery = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className='flex'>
      {pokemons.map(({ pId, imageUrl, name, types, description }) => (
        <Pokemon
          key={pId}
          pId={pId}
          imageUrl={imageUrl}
          name={name}
          types={types}
          description={description}
        />
      ))}
    </div>
  );
};

export default PokeGallery;
