import React from 'react';

const PokemonCard = (props) => {
  return (
    <div className='card'>
      <span className='name'>{props.name}</span>
      <img src={props.imageUrl} alt={props.name} className='image'></img>
    </div>
  );
};

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, pokemon: null };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then((data) => {
        return data.json();
      })
      .then(({ name, sprites }) =>
        this.setState((state) => ({
          pokemon: {
            name: name,
            imageUrl: sprites.other['official-artwork'].front_default,
          },
          loaded: true,
        }))
      );
  }

  render() {
    if (!this.state.loaded) {
      return <div className='loading'>Loading</div>;
    }
    const { name, imageUrl } = this.state.pokemon;
    return <PokemonCard name={name} imageUrl={imageUrl}></PokemonCard>;
  }
}

export default Pokemon;
