import {useState, useEffect} from "react"
function TravelerCard ({name, birthdate, email, image, phone, id, trip_id}) {
    
    const [triptravelers, setTriptravelers] = useState([])

    function handleRemove () {
        //DELETE the correct Trip Traveler
        console.log(triptravelers)
        const deletableTripTraveler = triptravelers.filter(triptraveler => (triptraveler.trip_id == trip_id)&&(triptraveler.traveler_id == id))
        const tt_id = (deletableTripTraveler[0].id)
        console.log(tt_id)
        fetch(`/trip_travelers/${tt_id}`, {
            method: "DELETE"
        })
        .then(resp=>resp.json())
        .then(window.location.reload())
    }
    
    useEffect (()=>{
        fetch("/trip_travelers")
        .then(resp=> resp.json())
        .then(triptravelers => setTriptravelers(triptravelers))
    }, [])

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
