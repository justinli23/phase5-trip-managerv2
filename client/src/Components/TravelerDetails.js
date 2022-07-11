import { useParams } from "react-router";
import { useEffect, useState } from "react";
import NavBar from "./NavBar"

function TravelerDetails () {

    const { id } = useParams()
    const [traveler, setTraveler] = useState({})
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    function handleEmail (e) {
        setEmail(e.target.value)
      }
    
    function handlePhone (e) {
        setPhone(e.target.value)
    }

    function handleUpdate (e) {
        if (email) {updateEmail(e)}
        if (phone) {updatePhone(e)}
    }

    function updateEmail (e) {
        e.preventDefault();
        fetch(`/travelers/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {email}
            )
        })
        .then(resp=>resp.json())
        .then(traveler => 
            setTraveler(traveler)    
        )
    }

    function updatePhone (e) {
        e.preventDefault();
        fetch(`/travelers/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {phone}
            )
        })
        .then(resp=>resp.json())
        .then(traveler => 
            setTraveler(traveler)    
        )
    }

    function handleDelete () {
        fetch(`/travelers/${id}`, {
            method: "DELETE",
        })
        .then(resp=>resp.json())
        .then(setTraveler({})
        )
    }
    
    useEffect(()=>{
        fetch(`/travelers/${id}`)
        .then(resp=>resp.json())
        .then(traveler=>
            setTraveler(traveler)
        )
    }, [])

    if (traveler.name) {
    return (
        <div>
            <NavBar />
            <img src={traveler.image}
            alt="Traveler"
            width="200"
            />
            <h2>{traveler.name}</h2>
            <h3>
                Birthdate: {traveler.birthdate} <br></br>
                Phone: {traveler.phone} <br></br>
                Email: {traveler.email} <br></br>
                {traveler.notes ? traveler.notes : <br></br>}
            </h3>
            <div>
                {/*UPDATE*/}
                Update Traveler Contact Info:
                <form onSubmit={handleUpdate}>
                    Phone: <input type="text" name="phone" value={phone} onChange={handlePhone} />
                    E-mail: <input type="text" name="email" value={email} onChange={handleEmail} />
                    <button type="submit">UPDATE</button>
                </form>
                {/*DELETE*/}
                <button onClick={handleDelete}>DELETE TRAVELER</button>
                (Caution: This action is irreversible) <br></br>
                <a href="/travelers">Return to All Travelers</a>
            </div>

        </div>
    );
    }

    return (
        <div>
            <NavBar />
            Sorry, that traveler doesn't seem to exist anymore!
            <br></br>
            <a href="/travelers">Return to All Travelers</a>
        </div>
    )

}

export default TravelerDetails;
