import { useEffect, useState } from "react";
import TravelerCard from "./TravelerCard"
import TravelerForm from "./TravelerForm"
import NavBar from "./NavBar";

function TravelerPage () {
  const [travelers, setTravelers] = useState([])

  useEffect(() => {
    fetch("/travelers")
    .then(resp=>resp.json())
    .then(travelers => {
      setTravelers(travelers)
    })
  }, [])

    return (
      <div>
        <NavBar />
        <TravelerForm travelers={travelers}
        setTravelers={setTravelers}/>
        {travelers.map(traveler => {
          return <TravelerCard 
          key={traveler.id}
          id={traveler.id}
          name={traveler.name}
          birthdate={traveler.birthdate}
          email={traveler.email}
          phone={traveler.phone}
          image={traveler.image}
          />
        })} 
      </div>
    );
  }

export default TravelerPage;
