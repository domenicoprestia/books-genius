import React, { useContext, useEffect, useState } from 'react'
import {BooksContext} from '../../utils/context'
import {Redirect} from 'react-router-dom'

import './book-info.style.scss'

const BookInfo = () => {

const [clickedBook, setClickedBook] = useContext(BooksContext)

   return(
      <div className='BookInfo'>

         <div className='headerBook'>
            <h1 className='titleBook'>{clickedBook[0].volumeInfo.title}</h1>
            <h2 className='authorBook'>Author: {clickedBook[0].volumeInfo.authors.map(author => {return author})}</h2>
            <h3 className='publicationYear'>Published year: {clickedBook[0].volumeInfo.publishedDate}</h3>
            <h4 className='pagesNumber'>Number of pages: {clickedBook[0].volumeInfo.pageCount}</h4> 
         </div>
         
         <div className='bodyBook'><img className='bookImage' src={clickedBook[0].volumeInfo.imageLinks ? clickedBook[0].volumeInfo.imageLinks.thumbnail : null}></img> 
         <p className='bookDesc'>{clickedBook[0].volumeInfo.description}</p></div>
         <div className='footerBook'><a href={clickedBook[0].volumeInfo.previewLink} className='booklink' target='_blank'>Book Preview</a></div>
         <div className='footerBook'><a href={clickedBook[0].volumeInfo.infoLink} className='booklink' target='_blank'>Google books infos</a></div>
      </div>
   )
}

export default BookInfo