
function TravelerCard ({name, birthdate, email}) {
    

    function findAge () {
        
    }

    
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFw2PWZ5pIZlTZU3CI74G8qhTnjtSj9IrWw&usqp=CAU"
            alt="Pikachu-placeholder"></img>
            
            <h2>{name}</h2>
            <h3>
                Birthdate: {birthdate}

                <br></br>
                Email: {email}
            </h3>
        
        </div>
    );

}

export default TravelerCard;
