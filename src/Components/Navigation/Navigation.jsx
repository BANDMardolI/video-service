import React from 'react'
import { useState } from 'react';
import "./Navigation.css";
import NavigationLink from '../NavigationLink/NavigationLink';


function Navigation(){
  const [active, setActive] = useState(' active');
  
  function switchActivePage(){
    setActive('')
    console.log(active);
  }

  return(
      <nav className='main_navigation'>
        <li className={'main_navigation__item'}>
        <NavigationLink onClick={switchActivePage} itemClass={active} text={'Фильмы'} path={"/"}/>
        </li>
        <li className={'main_navigation__item'}>
        <NavigationLink onClick={switchActivePage} text={'Телеканалы'} path={"/Channels"}/>
        </li>
      </nav>
  )
}

export default Navigation