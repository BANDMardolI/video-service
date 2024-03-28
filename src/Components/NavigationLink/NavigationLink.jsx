import React from 'react'
import './NavigationLink.css'
import {Link} from 'react-router-dom'
const activePage = document.querySelector('.main_navigation__link');


function NavigationLink({text, path}){
    return(
        <Link to ={path} href='#' className={"main_navigation__link"}>
        {text}
        </Link>
    )

}
export default NavigationLink