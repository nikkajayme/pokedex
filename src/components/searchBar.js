import * as React from 'react';
import { useState } from 'react';
import Icon from '../assets/magnifier.svg'


const SearchBar = () => {
    const [ value, setValue ] = useState('');
    const handleSearch = (event) => {
        console.log(event.target.value);
        setValue(event.target.value)
    };
    return (
        <form
            className="w-[320px] h-[50px] border border-white bg-card
                rounded-lg flex mx-auto mt-5"
        >
            <button className="w-[55px] border-r" type="submit">
                <Icon className="mx-auto"/>
            </button>
            <input
                className="w-full border-none bg-transparent pl-3
                placeholder:text-white placeholder:font-outfit-light
                    placeholder:tracking-wider text-white"
                placeholder="Search"
                onChange={handleSearch}
                value={value}
            />
        </form>
    )
}

export default SearchBar;

// TODO: add searching and more button