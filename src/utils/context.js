import React, {useState, createContext} from 'react'

export const BooksContext = createContext()

export const BooksProvider = (props) => {
   const [clickedBook, setClickedBook] = useState([])
   const [searchedBooks, setSearchedBooks] = useState([])
   const [searchedSubjectBooks, setSearchedSubjectBooks] = useState([])
   const [searchedAuthorBooks, setSearchedAuthorsBooks] = useState([])

   return(
      <BooksContext.Provider value={[searchedBooks, setSearchedBooks], [searchedSubjectBooks, setSearchedSubjectBooks], [searchedAuthorBooks, setSearchedAuthorsBooks], [clickedBook, setClickedBook]}>
         {props.children}
      </BooksContext.Provider>
   )
}