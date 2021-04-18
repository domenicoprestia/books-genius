import React, {useState, useEffect, useContext} from 'react'
import axios from '../../utils/axios'
import Book from '../book/book.component'
import {Link} from 'react-router-dom'
import {BooksContext} from '../../utils/context'

import './book-section.style.scss'

const BookSection = ({fetchUrl}) => {

   const [books, setBooks] = useState([])
   const [clickedBook, setClickedBook] = useContext(BooksContext)
   let click

   useEffect(() => {

      async function fetchBooks(){
         const request = await axios.get(fetchUrl)

         let data = []

         request.data.items.forEach( book => {
            data.push(book)
         })

         setBooks(data)
      }

      fetchBooks()
   }, [fetchUrl])
   
   async function handleClick(){
      await setClickedBook([click])
   }


   function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1) + "..." : str
   }

   return(
      <div className='book-section'>
         {books.map(book => (
         <div className='single-book' key={book.id} onClick={click = book, handleClick}>
            <Link to={`/books/${book.id}`}>
               <Book id={book.id} thumbnail={book.volumeInfo.imageLinks.thumbnail} title={truncate(book.volumeInfo.title, 15)}/>
            </Link>
         </div>
         ))}
      </div>
   )
}

export default BookSection