import {useState} from "react"

function TripForm ( {setTrips, trips} ) {
  const [name, setName] = useState("")
  const [startdate, setStartdate] = useState("")
  const [enddate, setEnddate] = useState("")
  const [image, setImage] = useState("")
  const [newLocation, setNewLocation] = useState("")
  const [locations, setLocations] = useState([])

  function handleName (e) {
    setName(e.target.value)
  }

  function handleStartdate (e) {
    setStartdate(e.target.value)
  }

  function handleEnddate (e) {
    setEnddate(e.target.value)
  }

  function handleImage (e) {
    setImage(e.target.value)
  }

  function handleNewLocation (e) {
    setNewLocation(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    // GET fetches all locations to see if location already exists
    fetch("/locations")
    .then(resp=>resp.json())
    .then(locations=> {
      // IF location name exists already in DB, createTrip with that ID
      if (locations.filter(location => location.name == newLocation)[0]) {
        const existingLocation = locations.filter(location => location.name == newLocation)[0]
        createTrip(existingLocation.id)
      }
      
      // ELSE, create new Location and then createTrip with new location ID
      else {
        fetch("/locations", {
          method: "POST",
          headers: {
            "Content-Type": 'application/json',
          },
          body: JSON.stringify({
            "name": newLocation
        })
        })
        .then(resp=>resp.json())
        .then(newLocation => {
          createTrip(newLocation.id)
        })
        }
      })
    }

  function createTrip (location_id) {
    fetch("/trips", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        "name": name,
        "start_date": startdate,
        "end_date": enddate,
        "image": image,
        "location_id": location_id
    })
    })
    .then(resp=>resp.json())
    .then(newTrip => {
      console.log(newTrip)
      setTrips([...trips, newTrip])
    })
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Create a New Trip</h2>
          Trip Name: <input type="text" name="name" value={name} onChange={handleName}/> <br></br>
          Location: <input type="text" name="newlocation" value={newLocation} onChange={handleNewLocation} /> <br></br>
          From: <input type="date" name="startdate" value={startdate} onChange={handleStartdate}/> to 
          <input type="date" name="enddate" value={enddate} onChange={handleEnddate}/> <br></br>
          Image URL: <input type="text" name="image" value={image} onChange={handleImage} /> <br></br>
          <button type="submit">Add Trip</button>
        </form>
      </div>
    );
}

export default TripForm