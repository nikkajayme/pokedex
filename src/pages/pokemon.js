import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "gatsby";
import NavBar from "../components/navBar";


const Pokemon = ({ location }) => {
    const { state } = location;
    
    const [ sprite, setSprite ] = useState('');
    const [ stats, setStats ] = useState([]);
    const [ abilities, setAbilities ] = useState([]);
    const [ types, setTypes ] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${state.name}`)
          .then(response => {
            console.log(response.data)
            setSprite(response.data.sprites['front_default'])
            setStats(response.data)
            setAbilities(response.data.abilities)
            setTypes(response.data.types)
          }
          )
          .catch(error => console.log(error))
      }, []);

    return (
        <section
            className="w-[375px] h-screen bg-blue-slate mx-auto
                font-outfit-light flex flex-col items-center text-white
                tracking-wider"
        >
            <NavBar />
            <div
                className="w-[288px] h-[338px] border border-light
                    rounded-xl mt-20 flex items-center justify-center py-2
                    px-2"
            >
                <div
                    className="w-[266px] h-full border-[3px] border-white
                        rounded-xl bg-card drop-shadow-md list-none flex
                        flex-col items-center justify-between py-4"
                >
                    <img src={sprite} alt={stats.name}/>
                    <div>
                        <p>name: <span className="text-teal">{stats.name}</span></p>
                        <p>abilities: 
                            {abilities.map((ability, index) =>
                                <span
                                    className="text-teal"
                                    key={index}
                                >
                                    {` ${ability.ability.name}`}
                                </span>
                            )}
                        </p>
                        <p>types: 
                            {types.map((type, index) =>
                                <span
                                    className="text-teal"
                                    key={index}
                                >
                                    {` ${type.type.name}`}
                                </span>
                            )}
                        </p>
                        <p>weight: <span className="text-teal">{stats.weight}</span></p>
                        <p>height: <span className="text-teal">{stats.height}</span></p>
                    </div>
                </div>
            </div>
            <Link
                to="/"
                className="text-light border border-white rounded-lg
                    m-4 px-3 py-1"
            >
                    back
            </Link>
        </section>
    )
}

export default Pokemon;