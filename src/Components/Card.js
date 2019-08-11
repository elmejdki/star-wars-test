import React from 'react';

const Card = ({ 
        id,
        name, 
        mass, 
        films, 
        height, 
        gender, 
        planet,
        species, 
        starships, 
        vehicules, 
        birth_year,
        handleClick 
    }) => {

    return(
        <div className = "card">
            <div className = "top-part">
                <div className = "text-info">
                    <span className = "icon person-icon"></span>
                    <span>{ name }</span>
                </div>
                <div className = "text-info">
                    <span className = "weight-icon icon"></span>
                    <span>{ mass } Kg</span>
                </div>
                <div className = "text-info">
                    <span className = "ruler-icon icon"></span>
                    <span>{ height }</span> M
                </div>
                <div className = "text-info">
                    <span className = "baby-icon icon"></span>
                    <span>{ birth_year }</span>
                </div>
                <div className = "text-info">
                    <span className = "gender-icon icon"></span>
                    <span>{ gender }</span>
                </div>
            </div>
            <div className="center-part">
                <img 
                    className ="profile-img" 
                    src = { `https://robohash.org/${ id }?200x200&set=set2` } 
                    alt = { name } />
            </div>
            <div className="bottom-part">
                <ul className="owner-ship">
                    <h4>Owns:</h4>
                    <li>{ films } Films</li>
                    <li>{ vehicules } Vehicules</li>
                    <li>{ starships } StarShips</li>
                    <li>{ species } Species</li>
                </ul>
                <div className="planet" onClick = { (e) => {
                    handleClick( planet );
                }}>
                    <span className="planet-icon"></span>
                    <span className="planet-text">Planet Home</span>
                </div>
            </div>
        </div>
    );
}

export default Card;