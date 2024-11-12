import React, { useContext } from 'react'
import '../styles/EmailBody.css'
import parse from 'html-react-parser';
import { actions } from '../reducer/EmailReducer';
import { emailContext } from '../context/EmailContext';

const EmailBody = () => {
  const contextValue = useContext(emailContext)
  const {dispatch,emailBodyContent,emails} = contextValue

  if (emailBodyContent == null) return <div>Loading...</div>

  const handleFavouriteEmail=(id)=>{
   let updatedEmails= emails.map((item)=>(item.id==id && !(item.isFavourite))?{...item,isFavourite:true}:{...item})
   dispatch({type:actions.SET_EMAILS,payload:updatedEmails})
  }

  return (
    <div className='emailBody'>
      <header className='emailBody_header'>
        <div className='emailBody_metaData'>
          <div className='emailBody_header_avatar'>F</div>
          <div>
            <div className='emailBody_header_subject'>Schedule for an interview</div>
            <div className='emailBody_header_date'>
              <span>10/10/2024</span>
              <span>10.30 am</span>
            </div>
          </div>
        </div>
        <button className='emailBody_header_favouriteBtn' onClick={()=>handleFavouriteEmail(emailBodyContent.id)} >
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
