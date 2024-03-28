import React from 'react';
import logo from '../../assets/icon/logo.png';

function Logo(){
    return(
        <div className='logo'>
          <img src={logo} alt="" className='logo__img' />
        </div>

    )
}
export default Logo;