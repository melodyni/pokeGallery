import React from 'react';
import './App.css';
import Pokemon from './pokemon.js';
import './pokemon.css';

const App = (props) => {
  console.log(props.list, typeof props.list[1]);
  const pokemons = props.list.map((id) => <Pokemon key={id} id={id} />);
  return <div className='flex'>{pokemons}</div>;
};

export default App;
