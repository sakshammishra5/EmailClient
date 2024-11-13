import React, { useContext } from 'react'
import '../styles/EmailItem.css'
import { emailContext } from '../context/EmailContext'

const EmailItem = ({ SelectMail, id, isSelected, item, index }) => {
  const { selectedEmailId } = useContext(emailContext)
  return (
    <div className={`emailItem ${item.isRead?'ReadEmail':''} ${(isSelected && selectedEmailId == id) ? 'selected' : ''}`} onClick={() => SelectMail(id, index)}>
      <div className='emailItem_avatar'>F {id}</div>
      <div className='emailItem_detail'>
        <div className='emailItem_detail_emailAddress'>From:<span>{item.from.name}</span>  <span>{item.from.email}</span></div>
        <div className='emailItem_detail_subject'>Subject:<span>{item.subject}</span></div>
        <div className='emailItem_detail_description'>{item.short_description}</div>
        <div className='emailItem_detail_dateAndTime'>
          <span>19/23/22</span>
          <span>10.30 am</span>
          {item.isFavourite && <span id='emailItem_Favourite_btn'>Favorite</span>}
        </div>
      </div>
    </div>
  )
}

export default EmailItem
