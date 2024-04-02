import React from 'react';
import "./Navigation.css";
import NavigationLink from '../NavigationLink/NavigationLink';


function Navigation(){
  return(
      <nav className='main_navigation'>
        <li className={'main_navigation__item'}>
        <NavigationLink text={'Фильмы'} path={"/"}/>
        </li>
        <li className={'main_navigation__item'}>
        <NavigationLink text={'Телеканалы'} path={"/Channels"}/>
        </li>
      </nav>
  )
}

export default Navigation;