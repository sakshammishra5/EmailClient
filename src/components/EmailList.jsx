import React, { useContext } from 'react'
import '../styles/EmailList.css'
import EmailItem from './EmailItem'
import { EmailContext } from '../layouts/MainLayout'


const EmailList = () => {
  const contextValue = useContext(EmailContext)
  const { emails, setSelectedEmailId, setEmails, setMailSelected } = contextValue

  function SelectMail(id) {
    setSelectedEmailId(id),
    setMailSelected(true),
    setEmails(prev => prev.map((item, index) => index === id ? { ...item, isSelected: true } : { ...item, isSelected: false }));
  }

  if (emails.length <= 0) return <div>Loading...</div>

  return (
    <div>
      {emails.map((item, index) =>
        <EmailItem
          key={item.id}
          item={item}
          SelectMail={SelectMail}
          isSelected={item.isSelected}
          id={index}
        />)}
    </div>
  )
}

export default EmailList
