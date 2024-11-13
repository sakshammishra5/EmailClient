import React, {  useContext, useEffect } from 'react'
import EmailList from '../components/EmailList'
import EmailBody from '../components/EmailBody'
import '../styles/MainLayout.css'
import Filter from '../components/Filter'
import { fetchEmailBody, fetchEmailList } from '../services/api'
import { emailContext } from '../context/EmailContext'
import { actions } from '../reducer/EmailReducer'
import { updateFetchedEmails } from '../services/helper'
import Pagination from '../components/Pagination'

const MainLayout = () => {
const contextObj =useContext(emailContext)
const {dispatch,mailSelected,selectedEmailId,currentPage}=contextObj

  useEffect(() => {
    const getEmails = async () => {
      try {
        const emailList = await fetchEmailList(currentPage)
        const updatedMail= updateFetchedEmails(emailList)
        dispatch({type:actions.SET_EMAILS,payload:updatedMail})
        dispatch({type:actions.SET_FILTERED_EMAILS,payload:updatedMail})
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    }
    getEmails();
  }, [currentPage])


  useEffect(() => {
    const getEmailBody = async () => {
        try {
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
  }, [selectedEmailId])


  return (
      <div className={`mainlayout_container ${mailSelected?'split_view':""}`}>
        <div className='mainlayout_container_emailList'>
          <Filter />
          <EmailList />
        </div>
{     mailSelected &&   <div className='mainlayout_container_body'>
          <EmailBody />
        </div>}
        <Pagination/>
      </div>
  )
}

export default MainLayout
