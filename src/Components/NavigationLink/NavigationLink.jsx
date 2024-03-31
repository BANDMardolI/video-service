import React from 'react'
import './NavigationLink.css'
import {Link} from 'react-router-dom';



function NavigationLink({text, path, itemClass}){
    return(
        <Link to ={path} href='#' className={itemClass}>
        {text}
        </Link>
    )

}
export default NavigationLink