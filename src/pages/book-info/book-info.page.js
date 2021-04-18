import React, { useContext } from 'react'
import {BooksContext} from '../../utils/context'

import './book-info.style.scss'

const BookInfo = () => {

const [clickedBook, setClickedBook] = useContext(BooksContext)

   function handleClick(){
      console.log(clickedBook)
   }

   return(
      <div className='BookInfo'>
         <div className='headerBook'></div>
         <div className='bodyBook'></div>
         <div className='footerBook'></div>
      </div>
   )
}

export default BookInfo