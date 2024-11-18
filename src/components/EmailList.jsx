import React, { useContext } from 'react'
import '../styles/EmailList.css'
import EmailItem from './EmailItem'
import { emailContext } from '../context/EmailContext'
import { actions } from '../reducer/EmailReducer'


const EmailList = () => {
  const contextValue = useContext(emailContext)
  const { dispatch, emails, filteredEmails, currentPage } = contextValue

  function SelectMail(id,mailDetails) {
    dispatch({ type: actions.SET_MAIL_SELECTED, payload: true });
    dispatch({ type: actions.SET_SELECTED_EMAIL_ID, payload: id });
    dispatch({type:actions.SET_SELECTED_MAIL_DETAILS,payload:mailDetails})
    let updatedEmails = emails.map((item) => item.id === id ? { ...item, isSelected: true, isRead: true } : { ...item, isSelected: false })
    dispatch({ type: actions.SET_EMAILS, payload: updatedEmails })
    localStorage.setItem('persistentMail', JSON.stringify(updatedEmails))
  }

  if (filteredEmails.length === 0) return <div>No emails found</div>

  return (
    <div>
      {filteredEmails.slice(currentPage * 10 - 10, currentPage * 10).map((item, index) =>
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
