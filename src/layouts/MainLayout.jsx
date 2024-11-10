import React, { createContext, useEffect, useState } from 'react'
import EmailList from '../components/EmailList'
import EmailBody from '../components/EmailBody'
import '../styles/MainLayout.css'
import Filter from '../components/Filter'
import { fetchEmailBody, fetchEmailList } from '../services/api'

export const EmailContext = createContext("email")

const MainLayout = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmailId, setSelectedEmailId] = useState(null);
  const [EmailBody, setEmailBody] = useState(null);
  const [mailSelected, setMailSelected] = useState(false);

  useEffect(() => {
    const getEmails = async () => {
      try {
        const emailList = await fetchEmailList()
        setEmails(emailList)
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    }
    getEmails();
  }, [])


  useEffect(() => {
    const getEmailBody = async () => {
      if (selectedEmailId && mailSelected) {
        try {
          const emailBody = await fetchEmailBody(selectedEmailId);
          setEmailBody(emailBody);
        }
        catch {
          console.error("Error fetching email body:", error);
        }
      }
    }
    getEmailBody()
  }, [selectedEmailId])



  const contextValue = {
    emails,
    setEmails,
    setSelectedEmailId,
    mailSelected,
    setMailSelected,
  };


  return (
    <EmailContext.Provider value={contextValue}>
      <div className={`mainlayout_container ${mailSelected?'split_view':""}`}>
        <div className='mainlayout_container_emailList'>
          <Filter />
          <EmailList />
        </div>
        <div className='mainlayout_container_body'>
          {mailSelected && <EmailBody />}
        </div>
      </div>
    </EmailContext.Provider>
  )
}

export default MainLayout
