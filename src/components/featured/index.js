import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';
import Slide from 'react-reveal/Slide';

const Featured = () => {
    return (
        <div style={{position:"relative"}}>

             <Carrousel />

           <div className="artist_name">
              <div className="wrapper">
                 
                 Ariana Grande
                 
                 </div>
                
               </div>

                 <Slide left delay={1000}>
                 
                 <TimeUntil />
            
                 </Slide>
              
              
        </div>
    );
};

export default Featured ;