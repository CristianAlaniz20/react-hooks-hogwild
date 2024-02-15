import React from "react";

function SortFilter({ onSortChange }) {
    function handleSortChange(event) {
        onSortChange(event)
    }
    
    return (
        <div>
            <label htmlFor="sort-dropdown" >Sort: </label>
            <select id="sort-dropdown" onChange={handleSortChange} >
                <option value="None"></option>
                <option value="Alphabet">Alphabetically</option>
                <option value="Weight">Weight</option>
            </select>
        </div>
    )
}

export default SortFilter