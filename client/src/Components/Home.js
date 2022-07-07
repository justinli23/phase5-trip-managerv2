import LeafMap from "./LeafMap";
import NavBar from "./NavBar"

function Home () {
    return (
      <div>
        <NavBar />
        <h1>
          Welcome to Trip Manager!
        </h1>
        <LeafMap />
        <img
          src="../images/home.jpg"
          width="1100"
          height="550"
          alt="Beautiful lake as home page"
        />
      </div>
    );
  }
  
  export default Home
  