import axios from 'axios'

const urlInstance = axios.create({
   baseURL: 'https://www.googleapis.com/books/v1'
})

export default urlInstance