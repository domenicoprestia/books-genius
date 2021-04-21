import React, { useContext, useState } from 'react'
import './search.style.scss'
import {BooksContext} from '../../utils/context'
import requests from '../../utils/requests'
import axios from '../../utils/axios'
import {Link} from 'react-router-dom'

const Search = () => {

const [clickedBook, setClickedBook] = useContext(BooksContext)
const [books, setBooks] = useState([])
const [inputField, setInputField] = useState([])

const handleChange = (e) => {
   setInputField([e.target.value])
}

const fetchData = async (fetchUrl) => {

   const request = await axios.get(fetchUrl)
   let data = []

      if(request.data.items){
         request.data.items.forEach( book => {
         data.push(book)
      })

      return data
   }
}

const handleSubmit = async (e) => {

   e.preventDefault()
   let books
   let param = e.target.children[0].value

   if(String(param) == 'author:'){
      let req = requests.searchAuthor.split('|')
      req[0] += String(inputField)
      let fetchUrl = req.join('')
      books = await fetchData(fetchUrl)
      setBooks(books)
   }
   else if(String(param) == 'subject:'){
      let req = requests.searchSubject.split('|')
      req[0] += String(inputField)
      let fetchUrl = req.join('')
      books = await fetchData(fetchUrl)
      setBooks(books)
   }else{
      let req = requests.searchName.split('|')
      req[0] += String(inputField)
      let fetchUrl = req.join('')
      books = await fetchData(fetchUrl)
      setBooks(books)
   }

   
}

async function handleClick(book){
   await setClickedBook([book])
}


function truncate(str, n){
   return str?.length > n ? str.substr(0, n-1) + "..." : str
}
   return(
      <div className='search'>
         
         <form onSubmit={handleSubmit}>
         
         <select className='params' name="params">
              
               <option value="author:">Author</option>
               <option value="subject:">Subject</option>
               <option value="">Book</option>
            
         </select>

            <input type='search' class='searchInput' placeholder='Search...' onChange={handleChange}></input>
            <button type='submit' class='searchButton'>🔎</button>

         </form>

         <div className='books'>
            {
               books.map(book => (
                  <div className='single-book' key={book.id} onClick={() => handleClick(book)}>
                     <Link to={`/books/${book.id}`}>
                        <Book id={book.id} thumbnail={book.volumeInfo.imageLinks.thumbnail} title={truncate(book.volumeInfo.title, 15)}/>
                     </Link>
                  </div>
                  ))
            }
         </div>
      </div>

   )
}

export default Search