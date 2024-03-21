import React, { useEffect, useState } from 'react';
import '../Styles/Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="Shop-cart">
     
      <h2>All Books are here</h2>

      <div className='big-data'>
        {books.map(book => (
          <div className="Card" key={book.id}>
            <img src={book.imageURL} alt="" />

            <h5 >
              <p>{book.bookTitle}</p>
             
            </h5>
               <Link to={`/book/${book._id}`} className='buy-now-link'>Learn 
            More</Link>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;




