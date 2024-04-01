import React from 'react';
import './Header.css';
import Logo from "../Logo/Logo";
import SearchEngine from "../UI/SearchEngine/SearchEngine";
import LoginButton from "../UI/LoginButton/LoginButton";
import Modal from '../Modal/Modal';



function Header(){
    return (
        <header>
            <Logo />
            <SearchEngine />
            <LoginButton />
            <Modal />
        </header> 
    )
}

export default Header;