import React, { useContext } from 'react'
import '../styles/EmailBody.css'
import { EmailContext } from '../layouts/MainLayout'

const EmailBody = () => {
  const contextValue = useContext(EmailContext)
  const { EmailBody,setEmailBody } = contextValue
  if (EmailBody == null) return <div>Loading...</div>
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
        <button className='emailBody_header_favouriteBtn'>
          Mark as favourite
        </button>
      </header>
      <main className='emailBody_body'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quo alias, excepturi rerum vitae eum nemo dolorem obcaecati fuga? Minus quo velit eveniet. Illo neque similique maiores facere ab ex!
      </main>
    </div>
  )
}

export default EmailBody
