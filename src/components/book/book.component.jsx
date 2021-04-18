import React from 'react'
import './book.style.scss'


const Book = ({title, thumbnail, id}) => {
   return(
      <div className='book' key={id}>
         <img className='book-img' src={thumbnail}></img>
         <h3 className='book-title'>{title}</h3>
      </div>
   )
}

export default Book