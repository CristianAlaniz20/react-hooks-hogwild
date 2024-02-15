import React,{ useState } from "react";
import Tile from "./Tile";
import GreasedFilter from "./GreasedFilter";
import SortFilter from "./SortFilter";


function PorkerTiles({ hogs }) {
    const [isGreased, setIsGreased] = useState("All")
    const [isSorted, setIsSorted] = useState("None")

    function onGreasedChange(event) {
        setIsGreased(event.target.value)
    }

    function onSortChange(event) {
        setIsSorted(event.target.value)
    }

    const hogsToDisplay = hogs.filter(hog => {
        if (isGreased === "All") return true
        else {
            const greasedString = String(hog.greased)
            return greasedString === isGreased
        }
    })

    const sortedHogs = [...hogsToDisplay].sort((a, b) => {
        if (isSorted === "Alphabet") {
            const hog1 = a.name.toLowerCase()
            const hog2 = b.name.toLowerCase()
            if(hog1 < hog2) {
                return -1
            }
        } else if (isSorted === "Weight") {
            return a.weight - b.weight
        }
        return 0
    })
    
    return (
        <div className="ui grid container" >
            <GreasedFilter onGreasedChange={onGreasedChange}/>
            <SortFilter onSortChange={onSortChange}/>
            {sortedHogs.map(hog => {
                return <Tile 
                key={hog.name}
                name={hog.name} 
                image={hog.image} 
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
                highestMedalAchieved={hog["highest medal achieved"]} />
            })}
        </div>
    )
}

export default PorkerTiles