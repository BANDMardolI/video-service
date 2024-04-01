import React from "react";
/* import { useState } from "react"; */
import './Modal.css';

function Modal(){
    return (
        <div className="modal">
            <div className="modal_container">
                <p className="modal_title">Вход</p>
                <input type="text" className="search_input"/>
                <input type="password" className="search_input"/>
            </div>
        </div>
    )
}

export default Modal;