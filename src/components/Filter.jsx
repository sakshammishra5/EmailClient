import React, { useState } from 'react'
import "../styles/Filter.css"

const Filter = () => {
    const [filterState, setfilterState] = useState("")

    function handleClick(filterString) {
        setfilterState(filterString)
    }

    return (
        <div className='filterContainer'>
            <span>Filter By:-</span>
            <button onClick={() => handleClick("unread")}>Unread</button>
            <button onClick={() => handleClick("read")}>Read</button>
            <button onClick={() => handleClick("favorite")}>Favorites</button>
        </div>
    )
}

export default Filter
