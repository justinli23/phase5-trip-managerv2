import { useParams } from "react-router";
import { useEffect, useState } from "react";
import TravelerCard from "./TravelerCard";

function TripDetails( {isAdmin} ) {
  const { id } = useParams();
  const [trip, setTrip] = useState({});
  const [activity, setActivity] = useState("");
  const [travelers, setTravelers] = useState({});
  const [qtraveler, setQtraveler] = useState("")
  const [activities, setActivities] = useState([])

  function handleDelete() {
    fetch(`/trips/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(setTrip({}));
  }

  function handleActivity(e) {
    setActivity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const activity_obj = {
      "name": activity,
      "location_id": trip.location.id
    }
    fetch("/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity_obj),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json()
        .then(
          setActivities([...activities, activity_obj])
      )};
    })
  }
  

  function handleQtraveler (e) {
    setQtraveler(e.target.value)
  }

  function handleNewAssignment (e) {
    e.preventDefault()    
    const traveler = travelers.filter(traveler=> traveler.name.includes(qtraveler) ? traveler.id : null)[0]
    console.log(traveler.id)
    fetch('/trip_travelers', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "trip_id": id,
            "traveler_id": traveler.id
        })
    })
    .then(r=>r.json())
    .then(window.location.reload())
  }

  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((resp) => resp.json())
      .then((trip) => {
        setTrip(trip)
        setActivities(trip.activities)
      })
      .then(
        fetch(`/travelers`)
          .then((r) => r.json())
          .then((travelers) => setTravelers(travelers))
      );
  }, []);

  if (trip.name) {
    return (
      <div>

        {/* TRIP OVERVIEW */}
        <div>
          <img src={trip.image} alt="Trip" width="200" />

          <h2>
            {trip.name} | {trip.location.name}
          </h2>
          <h3>
            Dates: {trip.start_date} to {trip.end_date}
          </h3>
        </div>

        {/* ACTIVITY DETAILS */}
        <h2>Things to Do/See in {trip.location.name}:</h2>
        
        {activities.map(activity => (
          <h4 key={activity.id}> {activity.name} </h4>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="activity"
            value={activity}
            onChange={handleActivity}
            placeholder="Found a new activity?"
          />
          <button type="submit">Add Activity</button>
        </form>

        {/* TRAVELER DETAILS */}
        <h3> Travelers On This Trip: </h3>
        {trip.travelers.map((traveler) => {
          return (
            <TravelerCard
              key={traveler.id}
              id={traveler.id}
              name={traveler.name}
              birthdate={traveler.birthdate}
              email={traveler.email}
              phone={traveler.phone}
              image={traveler.image}
              trip_id={id}
            />
          );
        })}

        <h3> Add a Traveler to This Trip: </h3>
        <form onSubmit={handleNewAssignment}>
            Query for Traveler's Name <input type="text" onChange={handleQtraveler} value={qtraveler}/>
            <button type="submit">Search</button>
        </form>

        <div>
          {/*DELETE*/}
          {isAdmin ?
            <div>
              <button onClick={handleDelete}>DELETE TRIP</button>
              (Caution: This action is irreversible) <br></br>
            </div>
          : null}
          <a href="/trips">Return to All Trips</a>
        </div>
      </div>
    );
  }

  return (
    <div>
      Sorry, that trip doesn't seem to exist anymore! <br></br>
      <a href="/trips">Return to All Trips</a>
    </div>
  );
}

export default TripDetails;
