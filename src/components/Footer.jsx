// Footer.jsx
import React from 'react';

const Footer = () => {

    const style = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    position: 'fixed',
    bottom: 0,
    width: '100%',

};
return (
    <footer style={style}>
        <p>&copy; 2023 Marc. All rights reserved.</p>
        <p>Contact: Marc@gmail.com</p>
    </footer>
);
};

export default Footer;
