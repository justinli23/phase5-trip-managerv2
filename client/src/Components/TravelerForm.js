import {useState} from "react"

function TravelerForm ( {setTravelers, travelers} ) {
  const [name, setName] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [image, setImage] = useState("")

  function handleName (e) {
    setName(e.target.value)
  }

  function handleBirthdate (e) {
    setBirthdate(e.target.value)
  }

  function handleEmail (e) {
    setEmail(e.target.value)
  }

  function handlePhone (e) {
    setPhone(e.target.value)
  }

  function handleImage (e) {
    setImage(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    fetch("/travelers", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        name,
        birthdate,
        email,
        phone,
        image
    })
    })
    .then(resp=>resp.json())
    .then(newTraveler => {
      console.log(newTraveler)
      setTravelers([...travelers, newTraveler])
      alert("Traveler added!")
    })
  }


  return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Create a New Traveler</h2>
          Traveler's Name: <input type="text" name="name" value={name} onChange={handleName}/> <br></br>
          Birthdate: <input type="date" name="birthdate" value={birthdate} onChange={handleBirthdate}/> <br></br>
          E-mail: <input type="text" name="email" value={email} onChange={handleEmail} /> <br></br>
          Phone: <input type="text" name="phone" value={phone} onChange={handlePhone} /> <br></br>
          Image: <input type="text" name="image" value={image} onChange={handleImage} />
          <button type="submit">Add Traveler</button>
        </form>
      </div>
    );
}

export default TravelerForm