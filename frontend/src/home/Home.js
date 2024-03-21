import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks';
import MainBanner from './MainBanner';

import Review from './Review';



const Home=()=>{
    return(
        <>
        <Banner/>
        <FavoriteBooks/>
        <MainBanner/>
    
        <Review/>
        </>
    )
}
export default Home;


















// import React, { useEffect, useState } from 'react';
// import '../Styles/Shop.css';
// import { NavLink } from 'react-router-dom';

// const Shop = () => {
//  const books=[{id:1,name:'harry potter',writer:'J K rowling',price:'550'},{id:2,name:'harry potter',writer:'J K rowling',price:'550'},{id:3,name:'harry potter',writer:'J K rowling',price:'550'},]

//   return (
//     <div className="Shop-cart">
//       <h2>All Books are here</h2>

//       <div className='big-data'>
//         {books.map(book => (
//           <div className="Card" key={book.id}>
//             <img src={book.imageURL} alt="" />

//             <h5 >
//               <p>{book.bookTitle}</p>
//             </h5>

//             <p >
//               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//             </p>
//             <NavLink to={`/shopdetail/${book.id}`}><button>Buy Now</button></NavLink>
            
           
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;




