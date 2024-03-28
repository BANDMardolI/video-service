import React from 'react';
import "./SearchEngine.css";
import SearchButton from "../SearchButton/SearchButton";

function SearchEngine(){
    return (
        <div className={'search_engine_container'}>
            <input className={'search_input'} placeholder={'Поиск...'}/>
            <SearchButton />
        </div>
    )
}

export default SearchEngine;