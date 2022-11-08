import * as React from "react";
import NavBar from "../components/navBar";
import { Link } from "gatsby";


const Pokemon = ({ location }) => {
    const {
        name,
        abilities,
        weight,
        height,
        types,
        img
    } = location.state
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
                    <img src={img} alt={name}/>
                    <div>
                        <p>name: <span className="text-teal">{name}</span></p>
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
                        <p>weight: <span className="text-teal">{weight}</span></p>
                        <p>height: <span className="text-teal">{height}</span></p>
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