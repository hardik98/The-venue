import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
        <Fade deley={500}>
         <div className="font_righteous footer_logo_venue">The Venue </div>
             <div className="footer_copyright">
             The venue 2018. All right reserved</div>
             </Fade>
            
        </footer>
    );
};

export default Footer;