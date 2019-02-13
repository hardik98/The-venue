import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../util/MyButton';


class Discount extends Component {
    
    state={
      start:0,
      end:30

    }
    porcontage = () => {

        if(this.state.start < this.state.end){

             this.setState({start:this.state.start + 1})


        }
        
    }

    componentDidUpdate(){

        setTimeout(this.porcontage,30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                     <Fade 
                      onReveal={()=>this.porcontage()}
                      >
                         <div className="discount_porcentage">
                            <span>{this.state.start}%</span>
                            <span>OFF</span>
                          </div>
                       </Fade>  

                       <Slide right> 
                      <div className="discount_description ">
                        <h3>Purchase Tickets Before 22 December</h3>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur commodi eligendi ut, incidunt molestiae veritatis repellendus eaque quod excepturi, harum, velit quasi. </p>
                        <div>
                            <MyButton
                              text="Purchase Ticket"
                              background="#ffa800"
                              color="#ffffff"
                              link="http://google.com"
                            />
                 </div>
                    </div>
                    </Slide>
                </div>

            </div>
        );
    }
}

export default Discount;