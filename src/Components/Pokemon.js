import React from 'react';

const Pokemon = ({ pId, imageUrl, name, types, description }) => {
  return (
    <div className='card'>
      <span className='name'>{name}</span>
      <img src={imageUrl} alt={name} className='image'></img>
    </div>
  );
};

export default Pokemon;
