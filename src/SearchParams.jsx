import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results"
import useBreedList from "./useBreedList";

const ANIMALS = ["dog", "rabbit", "bird", "cat", "reptile"];
const BREEDS = ["a", "b", "c"];

function SearchParams() {
  const [loc, setLoc] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  console.log(breeds);
  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${loc}&breed=${breed}`
    );

    const json = await res.json();
      console.log(json);
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form onSubmit = {e => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLoc(e.target.value)}
            value={loc.toUpperCase()}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal, idx) => (
              <option key={idx} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets = {pets} />
    </div>
  );
}

export default SearchParams;
