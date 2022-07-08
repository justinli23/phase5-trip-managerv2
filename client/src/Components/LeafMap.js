import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LeafMap() {
  return (
    <div>
      Where to today?
      <MapContainer center={[43.8041, -120.5542]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[43.8041, -120.5542]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafMap;
