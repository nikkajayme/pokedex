import * as React from "react";
import Logo from "../assets/pokelogo.svg"

const NavBar = () => {
    return (
        <nav className="w-[375px] h-[115px] bg-red flex items-center px-10 justify-between drop-shadow-md font-[outfit]">
            <p className="text-white">Pokedex</p>
            <div className="">
                <Logo />
                {/* <span className="w-5 h-[2px] bg-white block"/>
                <span className="w-5 h-[2px] bg-white block"/>
                <span className="w-5 h-[2px] bg-white block"/> */}
            </div>
        </nav>
    )
};

export default NavBar;