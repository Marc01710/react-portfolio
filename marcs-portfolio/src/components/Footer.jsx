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
        <p>&copy; 2023 Your Name. All rights reserved.</p>
        <p>Contact: marc@gmail.com</p>
    </footer>
);
};

export default Footer;
