import React, { useContext } from 'react'
import '../styles/EmailItem.css'
import { emailContext } from '../context/EmailContext'
import { convertDate } from '../services/helper'

const EmailItem = ({ SelectMail, id, isSelected, item}) => {
  const { selectedEmailId } = useContext(emailContext)
  return (
    <div className={`emailItem ${item.isRead?'ReadEmail':''} ${(isSelected && selectedEmailId == id) ? 'selected' : ''}`} onClick={() => SelectMail(id,item)}>
      <div className='emailItem_avatar'>{item.from.name.slice(0,1).toUpperCase()}</div>
      <div className='emailItem_detail'>
        <div className='emailItem_detail_emailAddress'>From:<span>{item.from.name}</span>  <span>{item.from.email}</span></div>
        <div className='emailItem_detail_subject'>Subject:<span>{item.subject}</span></div>
        <div className='emailItem_detail_description'>{item.short_description}</div>
        <div className='emailItem_detail_dateAndTime'>
          <span>{convertDate(item.date)}</span>
          {item.isFavourite && <span style={{color:"#E54065"}} id='emailItem_Favourite_btn'>Favorite</span>}
        </div>
      </div>
    </div>
  )
}

export default EmailItem
