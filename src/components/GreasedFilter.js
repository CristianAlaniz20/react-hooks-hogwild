import React from "react";

function GreasedFilter({ onGreasedChange }) {  
    function handleChange(event) {
        onGreasedChange(event)
    }

    return (
        <div>
            <label htmlFor="greased-dropdown" >Greased: </label>
            <select id="greased-dropdown" onChange={handleChange}>
                <option value="All" ></option>
                <option value={true} >True</option>
                <option value={false} >False</option>
            </select>
        </div>
    )
}

export default GreasedFilter