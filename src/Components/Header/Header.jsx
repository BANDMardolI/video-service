import React from 'react';
import './Header.css';
import Logo from "./Logo/Logo";
import SearchEngine from "./UI/SearchEngine/SearchEngine";
import LoginButton from "./UI/LoginButton/LoginButton";


function Header(){
    return (
        <header>
            <Logo />
            <SearchEngine />
            <LoginButton />
        </header>
    )
}

export default Header;