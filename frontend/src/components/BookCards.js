
import "../Styles/BookCards.css"


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";




const BookCards=({headLine,books})=>{

    return(
        <>
        <div className='diary'>
            <h2 className='Seller'>{headLine}</h2>
           

           <div>
           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
            books.map(book => <SwiperSlide key={book._id}>
                <Link to={`/book/${book._id}`}>
                    <div className="sell-book">
                        <img src={book.imageURL} alt="" />
                        <div className="cart-container">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                       
                    </div>
                    <div>
                        <h3>{book.Title}</h3>
                        <p>{book.authorName}</p>
                    </div>
                    <div
                    className="job">
                        <p>$5.00</p>
                    </div>
                </Link>
            </SwiperSlide>)
        }
      </Swiper>
           </div>
</div>
        </>
    )
}
export default BookCards;