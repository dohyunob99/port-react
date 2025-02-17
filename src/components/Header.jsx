import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { headerNavMo } from "../constants";

const Header = () =>{
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <h1><a href="/"><img src={logo} alt="nho" /></a></h1>
            <div className="pcNav">
                <nav className="nav">
                    <ul>
                        {headerNavMo.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div 
               className={`moNav ${show ? "active" : ""}`} 
               role="navigation" 
               aria-label="메인메뉴"
            >
                <button className="moIcon"
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"} 
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="moMenu">
                    <nav>
                        <ul>
                            {headerNavMo.map((nav, key) => (
                                <li key={key}>
                                    <a href={nav.url} onClick={toggleMenu}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>            
                </div>
            </div>
        </header>
    )
}

export default Header