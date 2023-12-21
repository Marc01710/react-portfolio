
import React from 'react';

const Header = () => {

    const header = {
        backgroundColor: '#333',
        color: '#fff',
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        top: 0
        
    };

    const nav = {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'inline-block',
        marginRight: 10,
        textDecoration: 'none',
        color: '#fff',

    }

    return (
        <header style={header}>
            <h1>Marc Hernandez</h1>
            <nav style={nav}>
                <ul>
                    <li style={nav}><a href="#about">About</a></li>
                    <li style={nav}><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
