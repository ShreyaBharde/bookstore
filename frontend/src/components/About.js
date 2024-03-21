import React from 'react';
import { Link } from 'react-router-dom';
import pc4 from "../assets/create.jpg";
import "../Styles/About.css"
const AboutPage = () => {
  return (
    <div className="about-page">
       
      <div className="content-wrapper">
        <img src={pc4} alt="Bookstore" className="bookstore-image" />
        <div className="content">
          <h1 className='hello'>About Our Bookstore <i class="fa-solid fa-book-open-reader"></i></h1>
          
          <p>Welcome to our bookstore app!</p>
          <p>We are passionate about books and believe in the power of literature to inspire, educate, and entertain. Our bookstore app is designed to provide book lovers with a convenient way to discover, purchase, and enjoy their favorite titles.</p>
          <h2 className='font'>Our Mission
          <i class="fa-solid fa-person-circle-question"></i></h2>
          <p>Our mission is to connect readers with the books they love and introduce them to new authors, genres, and ideas. We strive to create a welcoming and inclusive community where book enthusiasts can come together to share their passion for reading.</p>
         
          <h2 className='daily'>Why Choose Us
          <i class="fa-solid fa-question"></i></h2>
          <p>There are many reasons to choose our bookstore app:</p>
          <ul>
            <li>Wide Selection: We offer a diverse range of books to suit every taste and interest.</li>
            <li>Convenience: Our app allows you to browse and purchase books from the comfort of your own home.</li>
            <li>Recommendations: Discover new books based on your preferences and reading habits.</li>
            <li>Community: Connect with fellow book lovers, participate in discussions, and share your reading experiences.</li>
           
          </ul>
        
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
