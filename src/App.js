import './App.css';
import Navbar from './components/navbar/navbar.component'
import Search from './pages/search/search.page'
import BooksContainer from './components/books-container/books-container.component'
import BookInfo from './pages/book-info/book-info.page'
import {BooksProvider} from './utils/context'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BooksProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/search' exact component={Search}/>
            <Route path='/home' exact component={BooksContainer}/>
            <Route path='/books' component={BookInfo}/> 
          </Switch>
        </div>
      </Router>
    </BooksProvider>
  );
}

export default App;
