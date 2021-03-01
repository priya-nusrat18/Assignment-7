import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Card.css';

const Cards = (props) => {
     const {image, name, salary, playingRoll ,teamName}=props.team;
     const handleAddMember =props.handleAddMember;

    return (
        
        <div className="box-style">
            <div className="single-card">
                <div className="card text-center">
                        <div className="image">
                            <img className="imgeStyle" src={image} alt=""/>
                        </div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">
                                Player Name: {name}
                            </h5>
                            <p>
                                Team Name: {teamName}
                            </p>
                            <p> 
                                Playing Roll: {playingRoll}
                            </p>
                            <p>salary: {salary}</p>
                        </div>
                    <button className="Add-btn " onClick={() => handleAddMember(props.team)}><FontAwesomeIcon icon={faPlus} />Add To Team</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;