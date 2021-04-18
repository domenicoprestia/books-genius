import React, {useState, useEffect} from 'react'
import axios from '../../utils/axios'
import './books-container.style.scss'
import requests from '../../utils/requests'
import BookSection from '../book-section/book-section.component'


const BooksContainer = () => {
   return(
      <div className='book-container'>
      <section id='Fiction'>
         <h2 className='category'>Fiction 💭</h2>
         <BookSection fetchUrl={requests.fiction}/>
      </section>
      <section id='Poetry'>
         <h2 className='category'>Poetry 📜</h2>
         <BookSection fetchUrl={requests.poetry}/>
      </section>
      <section id='Fantasy'>
         <h2 className='category'>Fantasy 🐉</h2>
         <BookSection fetchUrl={requests.fantasy}/>
      </section>
      <section id='Romance'>
         <h2 className='category'>Romance 💖</h2>
         <BookSection fetchUrl={requests.romance}/>
      </section>
      <section id='Science'>
         <h2 className='category'>Science 🔬</h2>
         <BookSection fetchUrl={requests.science}/>
      </section>
      </div>
   )
}

export default BooksContainer