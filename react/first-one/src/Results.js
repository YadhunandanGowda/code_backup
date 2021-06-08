import React from 'react';
import Pet from './Pet';

const Results = (props) => {
    return (
        <div className="search" >
            {props.pets.animals === undefined ? <h1>No Pets Found</h1> : (
                props.pets.animals.map(pet => (
                    <Pet 
                    animal={pet.type}
                    key={pet.id}
                    name={pet.name}
                    breed= {pet.breeds.primary}
                    media={pet.photos}
                    location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                    id={pet.id}
                    />
                ))
            )}
        </div>
    )
}

export default Results;