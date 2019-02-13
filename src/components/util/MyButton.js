import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <Button
        
         href={props.link}
         target="_blank"
         variant="contained"
         size="small"
         style= {{
             background:props.background,
             color:props.color
         }}
        >
   
           <img
            src={ButtonIcon}
            className="iconImage"
            alt="icon_button"
           />         
           {props.text}
        </Button>
    );
};

export default MyButton;