import React from 'react'
import "./Navigation.css";
import NavigationLink from '../NavigationLink/NavigationLink';


function Navigation(){
  function switchActivePage(){

    const activePage = [...document.querySelectorAll('.main_navigation__link')];

    document.querySelector('.active').classList.remove();
    this.classList.add('active');
    console.log(activePage)
  }

  return(
      <nav className='main_navigation'>
        <li className={'main_navigation__item'}>
        <NavigationLink onClick={switchActivePage} itemClass={'main_navigation__link active'} text={'Фильмы'} path={"/"}/>
        </li>
        <li className={'main_navigation__item'}>
        <NavigationLink onClick={switchActivePage} itemClass={'main_navigation__link'} text={'Телеканалы'} path={"/Channels"}/>
        </li>
      </nav>
  )
}

export default Navigation