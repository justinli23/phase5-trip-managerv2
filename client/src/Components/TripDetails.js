import { useParams } from "react-router";
import { useEffect, useState } from "react";
import NavBar from "./NavBar"
import TravelerCard from "./TravelerCard";

function TripDetails () {

    const { id } = useParams()
    const [trip, setTrip] = useState({})
    const [activity, setActivity] = useState({})

    function handleDelete () {
        fetch(`/trips/${id}`, {
            method: "DELETE",
        })
        .then(resp=>resp.json())
        .then(setTrip({})
        )
    }
    
    function handleActivity (e) {
        setActivity(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch("/activities", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                "name": activity,
                "location_id": trip.location.id
            })
        })
        .then(resp=>resp.json())
        .then(setTrip(trip)
        )
    }

    useEffect(()=>{
        fetch(`/trips/${id}`)
        .then(resp=>resp.json())
        .then(trip=>
            setTrip(trip)
        )
    }, [])

    // console.log(trip)

    if (trip.name) {
    return (
        <div>
            <NavBar />

            {/* TRIP OVERVIEW */}
            <div> 
                <img src={trip.image}
                alt="Trip"
                width="200"
                />
                <h2>{trip.name} | {trip.location.name}</h2>
                <h3>Dates: {trip.start_date} to {trip.end_date}</h3>
            </div>

            {/* LOCATION DETAILS */}
            <h2>Notable activities/restaurants for {trip.location.name}:</h2>
            {trip.activities.map(activity=><h4 key={activity.id}>{activity.name}</h4>)}
            
            <form onSubmit={handleSubmit}>
                <input type="text" name="activity" value={activity} onChange={handleActivity}/>
                <button type="submit">Add Activity</button>
            </form>

            {/* TRAVELER DETAILS */}
            <h3> Travelers On This Trip: </h3>
            {trip.travelers.map(traveler => {
                return <TravelerCard 
                    key={traveler.id}
                    id={traveler.id}
                    name={traveler.name}
                    birthdate={traveler.birthdate}
                    email={traveler.email}
                    phone={traveler.phone}
                    image={traveler.image}
                    trip_id={id}
                />
            })}

            <div>
               
                {/*DELETE*/}
                <button onClick={handleDelete}>DELETE TRIP</button>
                (Caution: This action is irreversible) <br></br>
                <a href="/trips">Return to All Trips</a>
            </div>
        </div>
    );
    }

    return (
        <div>
            <NavBar />
            Sorry, that trip doesn't seem to exist anymore! <br></br>
            <a href="/trips">Return to All Trips</a>
        </div>
    )

}

export default TripDetails;
