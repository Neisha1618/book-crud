
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Books from './Books'

export type Book = {
  author: string;
  genre: string;
  id: number;
  price: string;
  title: string;
}

function App() {
   const [books, setBooks] = useState<Book[] | []>([])

   useEffect(() => {
        axios.get('http://localhost:3000/book')
        .then(({ data }) => {
        setBooks(data);
        })
        .catch((error) => {
          console.error(error);
        })
   }, []);

   
    return (
      <div>
         <h1>My Library</h1>
   
         <Books books={books}/>
      </div>
     )
   
  
}

export default App
