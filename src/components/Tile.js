import React, { useState } from "react";

function Tile({ name, image, specialty, greased, weight, highestMedalAchieved }) {
    const [isClicked, setIsClicked] = useState(false)

    function handleClick(event) {
        setIsClicked(!isClicked)
    }

    return (
        <div className="ui eight wide column pigTile" onClick={handleClick} >
            <h1>{name}</h1>
            <img className="minPigTile" src={image} alt="Hog" />
            {isClicked ? 
            <ul>
                <li>{ "Specialty:" + specialty}</li>
                <li>{ "Greased:" + greased}</li>
                <li>{ "Weight:" + weight}</li>
                <li>{ "Highest Medal Achieved:" + highestMedalAchieved}</li>
            </ul> :
            ""}
        </div>
    )
}

export default Tile