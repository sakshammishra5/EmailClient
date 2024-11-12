import React, {  useContext, useEffect } from 'react'
import EmailList from '../components/EmailList'
import EmailBody from '../components/EmailBody'
import '../styles/MainLayout.css'
import Filter from '../components/Filter'
import { fetchEmailBody, fetchEmailList } from '../services/api'
import { emailContext } from '../context/EmailContext'
import { actions } from '../reducer/EmailReducer'

const MainLayout = () => {
const contextObj =useContext(emailContext)
console.log(contextObj)
const {dispatch,mailSelected,selectedEmailId}=contextObj

  useEffect(() => {
    const getEmails = async () => {
      try {
        const emailList = await fetchEmailList()
        dispatch({type:actions.SET_EMAILS,payload:emailList})
        dispatch({type:actions.SET_FILTERED_EMAILS,payload:emailList})
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    }
    getEmails();
  }, [])


  useEffect(() => {
    const getEmailBody = async () => {
        try {
          console.log("get email body")
          const emailBody = await fetchEmailBody(selectedEmailId);
          dispatch({type:actions.SET_EMAIL_BODY,payload:emailBody})
        }
        catch(error) {
          console.error("Error fetching email body:", error);
        }
      }
      if(selectedEmailId){
        getEmailBody()
      }
  }, [])


  return (
      <div className={`mainlayout_container ${mailSelected?'split_view':""}`}>
        <div className='mainlayout_container_emailList'>
          <Filter />
          <EmailList />
        </div>
{     mailSelected &&   <div className='mainlayout_container_body'>
          <EmailBody />
        </div>}
      </div>
  )
}

export default MainLayout
