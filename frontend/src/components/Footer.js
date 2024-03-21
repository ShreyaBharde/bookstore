import React from 'react';
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>

      <div className="footer_main">

        
        <div className="footer_tag">

          <h2>Quick Link</h2>
          
          <p>Home</p>
          <p>About</p>
          <p>Shop</p>
          <p>Store</p>
         

        </div>

        <div className="footer_tag">

          <h2>Contact</h2>
          <p>+94 12 3456 789</p>
         
          <p>books@gmail.com</p>

        </div>

       

        <div className="footer_tag">

          <h2>Follows</h2>
        
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>

        </div>

      </div>

      

    </footer>
  );
};

export default Footer;

