import React, { useContext, useEffect } from 'react'
import {BooksContext} from '../../utils/context'

import './book-info.style.scss'

const BookInfo = () => {

const [clickedBook, setClickedBook] = useContext(BooksContext)

   const handleClick = () => {
      console.log(clickedBook)
   }

   return(
      <div className='BookInfo'>
         <div className='headerBook' onClick={handleClick}>
            <h1 className='titleBook'>{clickedBook[0].volumeInfo.title}</h1>
         </div>
         <div className='bodyBook'><img className='bookImage' src={clickedBook[0].volumeInfo.imageLinks.thumbnail}></img> <p className='bookDesc'>{clickedBook[0].volumeInfo.description}</p></div>
         <div className='footerBook'></div>
      </div>
   )
}

export default BookInfo