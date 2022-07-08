import {useState} from "react"

function TravelerForm () {
  const [name, setName] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [email, setEmail] = useState("")

  function handleName (e) {
    setName(e.target.value)
  }

  function handleBirthdate (e) {
    setBirthdate(e.target.value)
  }

  function handleEmail (e) {
    setEmail(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()

  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Create a New Traveler</h2>
          Traveler's Name <input type="text" name="name" value={name} onChange={handleName}/> <br></br>
          Birthdate <input type="date" name="birthdate" value={birthdate} onChange={handleBirthdate}/> <br></br>
          E-mail <input type="text" name="email" value={email} onChange={handleEmail} />
        </form>
      </div>
    );
}

export default TravelerForm