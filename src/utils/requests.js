const requests = {
   fiction: `volumes?q=subject:fiction&maxResults=10&key=${process.env.REACT_APP_API_KEY}`,
   poetry: `volumes?q=subject:poetry&maxResults=10&key=${process.env.REACT_APP_API_KEY}`,
   fantasy: `volumes?q=subject:fantasy&maxResults=10&key=${process.env.REACT_APP_API_KEY}`,
   romance: `volumes?q=subject:romance&maxResults=10&key=${process.env.REACT_APP_API_KEY}`,
   science: `volumes?q=subject:science&maxResults=10&key=${process.env.REACT_APP_API_KEY}`,


   searchAuthor: `volumes?q=author:|&maxResults=10&key=${process.env.REACT_APP_API_KEY}`,


   searchSubject:`volumes?q=subject:|&maxResults=10&key=${process.env.REACT_APP_API_KEY}`,
   

   searchName: `volumes?q=|&maxResults=10&key=${process.env.REACT_APP_API_KEY}`
   
}

export default requests