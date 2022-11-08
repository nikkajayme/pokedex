import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import NavBar from "../components/navBar";
import Icon from "../assets/magnifier.svg";


const Home = () => {
  const [pokedex, setPokedex] = useState([]);
  const [value, setValue] = useState('');
  const handleSearch = (event) => {
    // console.log(event.target.value);
    setValue(event.target.value)
  };

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        setPokedex(response.data.results)
        // console.log(response.data)
      }
      )
      .catch(error => console.log(error))
  }, []);

  return (
    <section
      className="w-[375px] h-full bg-blue-slate mx-auto font-outfit
          tracking-wide"
    >
      <Helmet>
        <title>Pokedex</title>
        <link rel="icon" href="/static/pokelogo.svg" className="h-4 w-4"/>
      </Helmet>
      <NavBar />
      <form
        className="w-[320px] h-[50px] border border-white bg-card
                rounded-lg flex mx-auto mt-5"
      >
        <div className="w-[55px] border-r">
          <Icon className="mx-auto mt-2" />
        </div>
        <input
          className="w-full border-none bg-transparent pl-3
                placeholder:text-white placeholder:font-outfit-light
                    placeholder:tracking-wider text-white"
          placeholder="Search"
          onChange={handleSearch}
          value={value}
        />
      </form>
      <div>
        {/* <ul className="flex flex-col gap-10 items-center py-20">
          {pokedex.map(pokemon =>
            <Item key={pokemon.name} url={pokemon.url} />
          )}
        </ul> */}
        <ul className="flex flex-col gap-10 items-center py-20">
          {pokedex
            .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
            .map(pokemon => <Item key={pokemon.name} url={pokemon.url} />)
          }
        </ul>
      </div>
    </section>
  )
}

const Item = ({ url }) => {
  const [pokemon, setPokemon] = useState([]);
  const [sprites, setSprites] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(response => {
        // console.log(response.data)
        setPokemon(response.data)
        setSprites(
          response.data.sprites.versions['generation-vi']
          ['omegaruby-alphasapphire']['front_default']
        )
      }
      )
      .catch(error => console.log(error))
  }, [url]);

  return (
    <li
      className="w-[288px] h-[255px] border-[0.3px] border-light rounded-xl
          flex flex-col items-center justify-center"
    >
      <Link
        to="/pokemon/"
        state={{
          name: pokemon.name,
          // abilities: pokemon.abilities,
          // weight: pokemon.weight,
          // height: pokemon.height,
          // types: pokemon.types,
        }}
      >
        <div className="w-[266px] h-[235px] flex flex-col justify-between">
          <div
            className="w-[266px] h-[181px] border-[3px] border-white
                    rounded-xl bg-card drop-shadow-md"
          >
            <img
              className="w-full h-full object-none"
              src={sprites}
              alt={pokemon.name}
            />
          </div>
          <div
            className="w-[266px] h-[48px] border-[3px] border-white
                    rounded-xl bg-card drop-shadow-md"
          >
            <p className="text-white text-center mt-2">
              {pokemon.name}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Home;


