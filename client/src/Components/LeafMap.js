import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

function LeafMap() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then((locations) => setLocations(locations));
  }, []);

  // console.log(locations[0].first_trip.start_date.split('-')[0]);
  return (
    <div>
      Where to today?
      <MapContainer center={[25, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => {
          return (
            <Marker
              position={[
                parseFloat(location.longitude),
                parseFloat(location.latitude),
              ]}
              key={location.id}
            >
              <Popup>
                {location.name} <br></br>
              <a href= {`/trips/${location.first_trip.id}`}>{location.first_trip.name} in {location.first_trip.start_date.split('-')[0]}</a> 
              </Popup>
            </Marker>
          );
        })}
        {/* <Marker position={[20, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default LeafMap;
