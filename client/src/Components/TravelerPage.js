import { useEffect, useState } from "react";
import TravelerCard from "./TravelerCard"
import TravelerForm from "./TravelerForm"

function TravelerPage ({user}) {
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
        <TravelerForm travelers={travelers}
        setTravelers={setTravelers}
        user={user}/>
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
