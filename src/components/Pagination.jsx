import React, { useContext, useState } from 'react'
import { emailContext } from '../context/EmailContext'
import { actions } from '../reducer/EmailReducer'
import '../styles/Pagination.css'




const Pagination = () => {
  const {dispatch} = useContext(emailContext)
  return (
    <div className='paginationContainer'>
        <button onClick={()=>dispatch({type:actions.SET_CURRENT_PAGE,payload:1})}>1</button>
        <button onClick={()=>dispatch({type:actions.SET_CURRENT_PAGE,payload:2})}>2</button>
    </div>
  )
}


export default Pagination
