import React, { useContext, useState } from 'react'
import './search.style.scss'
import {AiOutlineSearch} from 'react-icons/ai'
import {BooksContext} from '../../utils/context'
import requests from '../../utils/requests'

const Search = () => {

const [searchedBooks, setSearchedBooks] = useContext(BooksContext)
const [searchedSubjectBooks, setSearchedSubjectBooks] = useContext(BooksContext)
const [searchedAuthorBooks, setSearchedAuthorsBooks] = useContext(BooksContext)
const [inputField, setInputField] = useState([])

const handleChange = (e) => {
   setInputField([e.target.value])
}

const handleSubmit = () => {
   if(String(inputField[0]).contains('author:')){

   }
   else if(String(inputField[0]).contains('subject:')){

   }else{

   }
}

   return(
      <div className='search'>
        <div className="searchBox">
         <input className="searchInput" type="text" name="" placeholder="Search for books, author, or subjects (specify with author:, or subject:)" onChange={handleChange}></input>
          <button type='submit' className="searchButton" onClick={handleSubmit}>
            <AiOutlineSearch></AiOutlineSearch>
         </button>
         </div>
      </div>
   )
}

export default Search