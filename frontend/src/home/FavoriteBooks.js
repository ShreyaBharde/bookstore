import React, { useState,useEffect } from 'react'
import BookCards from '../components/BookCards';

const FavoriteBooks =()=>{
    const [books,setBooks]= useState([]);

   useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
   },[])
         



    return(
        <div className='demo'>
            <BookCards books={books} headLine="Books Collection"/>
        </div>
    )
}
export default  FavoriteBooks;