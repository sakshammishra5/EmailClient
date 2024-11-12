import React, { useContext } from 'react'
import '../styles/EmailList.css'
import EmailItem from './EmailItem'
import { emailContext } from '../context/EmailContext'
import { actions } from '../reducer/EmailReducer'



const EmailList = () => {
  const contextValue = useContext(emailContext)
  const { dispatch, emails,filteredEmails } = contextValue

  function SelectMail(id, index) {
    dispatch({ type: actions.SET_SELECTED_EMAIL_ID, payload: id });
    dispatch({ type: actions.SET_MAIL_SELECTED, payload: true });
    let updatedEmails = emails.map((item, i) => index === i ? { ...item, isSelected: true, isRead: true } : { ...item, isSelected: false })
    dispatch({ type: actions.SET_EMAILS, payload: updatedEmails })
  }

  if (emails.length <= 0) return <div>Loading...</div>

  return (
    <div>
      {filteredEmails.map((item, index) =>
        <EmailItem
          key={item.id}
          item={item}
          SelectMail={SelectMail}
          isSelected={item.isSelected}
          id={item.id}
          index={index}
        />)}
    </div>
  )
}

export default EmailList
