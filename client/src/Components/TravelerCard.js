import {useState} from "react"
function TravelerCard ({name, birthdate, email, image, phone, id, trip_id}) {
    
    const [trip_travelers, setTrip_Travelers] = useState([])
    function handleRemove () {
        fetch("/trip_travelers/")
        .then(resp=> resp.json())
        .then(triptravelers => setTrip_Travelers(triptravelers))
        //DELETE the correct Trip Traveler
        const deletableTripTraveler = trip_travelers.filter(triptraveler => (triptraveler.trip_id == trip_id)&&(triptraveler.traveler_id == id))

        console.log(deletableTripTraveler[0].id)
        // fetch(`/trip_travelers/${deletableTripTraveler[0].id}`, {
        //     method: "DELETE"
        // })
        // .then(resp=>resp.json())
        // .then(deletedTripTraveler=> console.log(deletedTripTraveler))

    }
    
    
    return (
        <div>
            <img src={image}
            alt="Traveler"
            width="100"
            />
            <h2><a href={`/travelers/${id}`}>{name}</a></h2>
            <h3>
                Birthdate: {birthdate} <br></br>
                Phone: {phone} <br></br>
                Email: {email}
            </h3>

            {trip_id ? <button onClick={handleRemove}>Remove from Trip</button> : null}
        </div>
    );

}

export default TravelerCard;
