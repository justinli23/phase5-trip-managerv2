import { useEffect, useState } from "react";
import TripCard from "./TripCard"
import TripForm from "./TripForm"
import NavBar from "./NavBar";

function TripPage () {
  
  const [trips, setTrips] = useState([])

  useEffect(() => {
    fetch("/trips")
    .then(resp=>resp.json())
    .then(trips => {
      setTrips(trips)
    })
  }, [])

  return (
      <div>
        <NavBar />
        <TripForm trips={trips} setTrips={setTrips}/>
        {trips.map(trip => {
          return <TripCard 
          key={trip.id}
          id={trip.id}
          name={trip.name}
          location={trip.location.name}
          start_date={trip.start_date}
          end_date={trip.end_date}
          image={trip.image}/>
        })}

      </div>
    );
  }
  
  export default TripPage;
  