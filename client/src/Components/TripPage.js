import TripCard from "./TripCard"
import TripForm from "./TripForm"
import NavBar from "./NavBar";

function TripPage () {
    return (
      <div>
        <NavBar />
        Welcome to the TripPage
        <TripForm />
        <TripCard />
        <TripCard />
      </div>
    );
  }
  
  export default TripPage;
  