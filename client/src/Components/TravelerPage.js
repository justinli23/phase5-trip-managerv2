import { useEffect, useState } from "react";
import TravelerCard from "./TravelerCard"
import TravelerForm from "./TravelerForm"
import NavBar from "./NavBar";

function TravelerPage () {
  
  useEffect(() => {
    fetch("/travelers")
    .then(resp=>resp.json())
    .then(travelers => {
      console.log(travelers)
    })
  }, [])

  return (
    <div>
      <NavBar />
      <TravelerForm />
      {/* {travelers.map(traveler => {
        return <TravelerCard />
      })}  */}
    </div>
  );
}

export default TravelerPage;
