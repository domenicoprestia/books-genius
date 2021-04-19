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
            <h2 className='authorBook'>Author: {clickedBook[0].volumeInfo.authors.map(author => {return author})}</h2>
            <h3 className='publicationYear'>Published year: {clickedBook[0].volumeInfo.publishedDate}</h3>
            <h4 className='pagesNumber'>Number of pages: {clickedBook[0].volumeInfo.pageCount}</h4>
            
         </div>
         <div className='bodyBook'><img className='bookImage' src={clickedBook[0].volumeInfo.imageLinks.thumbnail}></img> 
         <p className='bookDesc'>{clickedBook[0].volumeInfo.description}</p></div>
         <div className='footerBook'><a href={clickedBook[0].volumeInfo.previewLink} className='booklink' target='_blank'>Book Preview</a></div>
         <div className='footerBook'><a href={clickedBook[0].volumeInfo.infoLink} className='booklink' target='_blank'>Google books infos</a></div>
      </div>
   )
}

export default BookInfo