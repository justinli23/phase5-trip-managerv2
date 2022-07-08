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
      <TravelerForm />
      {travelers.map(traveler => {
        return <TravelerCard 
        key={traveler.id}
        name={traveler.name}
        birthdate={traveler.birthdate}
        email={traveler.email}
        />
      })} 
    </div>
  );
}

export default TravelerPage;
