import React from 'react'
import './NavigationLink.css'
import {NavLink} from 'react-router-dom';



function NavigationLink({text, path}){
    return(
        <NavLink to ={path} href='#' className={"main_navigation__link"}>
        {text}
        </NavLink>
    )

}
export default NavigationLink;