import React, { useContext } from 'react'
import '../styles/EmailBody.css'
import parse from 'html-react-parser';
import { actions } from '../reducer/EmailReducer';
import { emailContext } from '../context/EmailContext';
import { convertDate } from '../services/helper';

const EmailBody = () => {
  const contextValue = useContext(emailContext)
  const { dispatch, emailBodyContent, emails, selectedMailDetails } = contextValue

  if (emailBodyContent == null) return <div>Loading...</div>

  const handleFavouriteEmail = (id) => {
    let updatedEmails = emails.map((item) => (item.id == id && !(item.isFavourite)) ? { ...item, isFavourite: true } : { ...item })
    localStorage.setItem('persistentMail', JSON.stringify(updatedEmails))
    dispatch({ type: actions.SET_EMAILS, payload: updatedEmails })
  }
 
  return (
    <div className='emailBody'>
      <header className='emailBody_header'>
        <div className='emailBody_metaData'>
          <div className='emailBody_header_avatar'>{selectedMailDetails.from.name.slice(0,1).toUpperCase()}</div>
          <div>
            <div className='emailBody_header_subject'>{selectedMailDetails.subject}</div>
            <div className='emailBody_header_date'>
              <span>{ convertDate(selectedMailDetails.date)}</span>
            </div>
          </div>
        </div>
        <button className='emailBody_header_favouriteBtn' onClick={() => handleFavouriteEmail(emailBodyContent.id)} >
          Mark as favourite
        </button>
      </header>
      <main className='emailBody_body'>
        {parse(emailBodyContent.body)}
      </main>
    </div>
  )
}

export default EmailBody
