
function TripCard ({name, start_date, end_date, image, location, id}) {

    return (
        <div>
            <img src={image}
            alt="Trip"
            width="200"/>
            <h2><a href={`/trips/${id}`}>{name}</a> | {location} </h2> 
            <h3>{start_date} to {end_date}</h3>
        </div>
    );
}

export default TripCard;
