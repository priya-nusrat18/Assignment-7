import React from 'react';
import './AddInfo.css'

const AddInfo = (props) => {
    console.log(props);
     const {image, name, salary, playingRoll ,teamName}=props.info;
   
    return (
        <div className="info-box">
            <img className="imageStyle" src={image} alt=""/>
            <h5>Player Name: {name}</h5>
             <p> Team Name: {teamName}</p>
              <p> Playing Roll: {playingRoll}</p>
               <p>salary: {salary}</p>
            
        </div>
    );
};

export default AddInfo;