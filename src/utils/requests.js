const requests = {
   fiction: `volumes?q=subject:fiction&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
   poetry: `volumes?q=subject:poetry&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
   fantasy: `volumes?q=subject:fantasy&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
   romance: `volumes?q=subject:romance&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
   science: `volumes?q=subject:science&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,


   searchAuthor: `volumes?q=author:&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,


   searchSubject:`volumes?q=author:&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
   

   searchName: `volumes?q=author:&maxResults=40&key=${process.env.REACT_APP_API_KEY}`
   
}

export default requests