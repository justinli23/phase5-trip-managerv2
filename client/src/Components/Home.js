import LeafMap from "./LeafMap";
import NavBar from "./NavBar"

function Home () {
    return (
      <div>
        <NavBar />
        <h1>
          Trip Manager
        </h1>
        <h3>
          ~for all your trip planning needs~
        </h3>
        <LeafMap />
        
      </div>
    );
  }
  
  export default Home
  