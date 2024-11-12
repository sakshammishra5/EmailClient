import React, { useContext, useEffect, useState } from 'react'
import "../styles/Filter.css"
import { emailContext } from '../context/EmailContext'
import { actions } from '../reducer/EmailReducer'

const Filter = () => {
    const contextObj=useContext(emailContext)
    const {dispatch,emails}=contextObj
    const [filterState, setfilterState] = useState(null)
  
    function handleClick(filterString) {
        setfilterState(filterString)
    }

    useEffect(() => {
      const filteredMail= emails.filter((item) => {
            if (filterState == "unread") return !(item.isRead)
            if (filterState == "read") return (item.isRead)
            if (filterState == "favourite") return item.isFavourite
            else return true
        }
        )
        dispatch({type:actions.SET_FILTERED_EMAILS,payload:filteredMail})
    }, [filterState,emails])

    return (
        <div className='filterContainer'>
            <span>Filter By:-</span>
            <button className={filterState=="unread"?'selectedFilter_style' : ''} onClick={() => handleClick("unread")}>Unread</button>
            <button className={filterState=="read"?'selectedFilter_style' : ''} onClick={() => handleClick("read")}>Read</button>
            <button className={filterState=="favourite"?'selectedFilter_style' : ''} onClick={() => handleClick("favourite")}>Favorites</button>
        </div>
    )
}

export default Filter
