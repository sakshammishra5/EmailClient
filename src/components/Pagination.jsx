import React, { useContext, useState } from 'react'
import { emailContext } from '../context/EmailContext'
import { actions } from '../reducer/EmailReducer'
import '../styles/Pagination.css'

const Pagination = () => {
  const { dispatch, emails, currentPage, filteredEmails } = useContext(emailContext)

  const selectPageHandler = (selectPage) => {
      dispatch({ type: actions.SET_CURRENT_PAGE, payload: selectPage })
  }

  console.log(currentPage)
  return (
    <div className='paginationContainer'>
      {filteredEmails.length > 0 && [...Array(Math.ceil(emails.length / 10))].map((_, index) => <button onClick={() => selectPageHandler(index + 1)} >{index + 1}</button>)}
    </div>
  )
}


export default Pagination
