import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.style.scss'

const Navbar = () => {
   return(
      <div className='side-nav'>
      <Link to='/'><h2 className='logo'>books-genius</h2></Link>
         <ul>
         <h3 className='title'>Discovery</h3>
            <li>
               <Link to='/search'><span className='name'>Search Books</span> 🔎</Link>
            </li>
         <h3 className='title'>Genres</h3>
            <li>
               <a href='/#Fiction'><span className='name'>Fiction</span> 💭</a>
            </li>
            <li>
               <a href='/#Poetry'><span className='name'>Poetry</span> 📜</a>
            </li>
            <li>
               <a href='/#Fantasy'><span className='name'>Fantasy</span> 🐉</a>
            </li>
            <li>
               <a href='/#Romance'><span className='name'>Romance</span> 💖</a>
            </li>

            <li>
               <a href='/#Science'><span className='name'>Science</span> 🔬</a>
            </li>
         </ul>
      </div>
   )
}

export default Navbar