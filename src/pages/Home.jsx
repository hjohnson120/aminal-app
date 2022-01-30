import { useState} from 'react';
import axios from 'axios';
import Animal from '../components/Animal';


export default function Home() {
  const [animals, setAnimals] = useState([])

  const getAnimals = () => {
      axios
        .get('https://zoo-animal-api.herokuapp.com/animals/rand/10')
        .then(resp => {
          setAnimals(resp.data)
          })
        .catch(error => {
         console.log(error.response.data.message)
        })
  }

  return (
    <div className="main-theme">
      <p>Hi</p>
      <button onClick={getAnimals} className="search-btn">SHOW ME THE ANIMALS!</button>
      <div>
        {animals.map(animal => {
          return (
            <Animal
              name={animal.name}
              key={animal.id}
              type={animal.animal_type}
              diet={animal.diet}
              range={animal.geo_range}
              image={animal.image_link}
            />
          )
        })}
      </div>
    </div>
  );
}