import React from 'react';
import Card from './Card';

const CardList = ({ characters, handleClick }) => {
    return (
        <div className="content">
            {
                characters.map(( character, i ) => {
                    return (
                        <Card
                            key         = { i }
                            id          = { character.name }
                            name        = { character.name } 
                            mass        = { character.mass } 
                            planet      = { character.homeworld }
                            height      = { character.height }
                            birth_year  = { character.birth_year }
                            gender      = { character.gender }
                            films       = { character.films.length }
                            vehicules   = { character.vehicles.length }
                            species     = { character.species.length }
                            starships   = { character.starships.length }
                            handleClick = { handleClick }
                        />
                    )
                })

            }
        </div>
    );
}

export default CardList;