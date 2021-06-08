import React, {useState , useEffect, useContext} from "react";
import pet , {ANIMALS} from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from './ThemeContext';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    // const [animal, setAnimal] = useState("Dog");
    // const [breed , setBreed] = useState("");
    const [breeds , setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal" , "Dog" , ANIMALS);
    const [breed , BreedDropdown , setBreed] = useDropdown("Breed" , "" , breeds);
    const [pets, setPets] = useState([]);
    const [theme] = useContext(ThemeContext);

    async function requestPets () {
        const animals = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || []);
    }

useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({breeds}) => {
        const breedSet = breeds.map(item => item.name)
        setBreeds(breedSet);
    })
}, [animal]);

    return (
        <div className="search-params">
            <form onSubmit= {(e)=> {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Loaction
                    <input id="location" value={location} placeholder="Location" onChange= {e => setLocation(e.target.value)}/>
                </label>
                <AnimalDropdown></AnimalDropdown>
                <BreedDropdown></BreedDropdown>
                <button style={{backgroundColor: theme}}>Submit</button>
            </form>
                <Results
                pets={pets}
                />
        </div>
    )
}

export default SearchParams;