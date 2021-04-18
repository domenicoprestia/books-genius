import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.style.scss'

const Navbar = () => {
   return(
      <div className='side-nav'>
      <h2 className='logo'>books-genius</h2>
         <ul>
         <h3 className='title'>Discovery</h3>
            <li>
               <Link to='/search'>Search Books 🔎</Link>
            </li>
         <h3 className='title'>Genres</h3>
            <li>
               <a href='/home#Fiction'>Fiction 🤖</a>
            </li>
            <li>
               <a href='/home#Poetry'>Poetry 📜</a>
            </li>
            <li>
               <a href='/home#Fantasy'>Fantasy 🐉</a>
            </li>
            <li>
               <a href='/home#Romance'>Romance 💖</a>
            </li>

            <li>
               <a href='/home#Science'>Science 🔬</a>
            </li>
         </ul>
      </div>
   )
}

export default Navbar