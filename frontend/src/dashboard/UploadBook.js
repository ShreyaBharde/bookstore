import React, { useState } from 'react';
import "../Styles/UploadBook.css"
import "../Styles/SideBar.css"
const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "History",
    "Children",
    "Travel"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    };
    
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book uploaded successfully");
    });
  };

  return (
    <div className='upload-book-container'>
       
      <h2>Upload A Book</h2>
     
      <form onSubmit={handleBookSubmit} className="upload-form">
        <div className='form-row'>
          <div className='form-column'>
            <label htmlFor="bookTitle">Book Title</label>
            <input id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required />
          </div>
          <div className='form-column'>
            <label htmlFor="authorName">Author Name</label>
            <input id="authorName" name="authorName" type="text" placeholder="Author Name" required />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-column'>
            <label htmlFor="imageURL">Image URL</label>
            <input id="imageURL" name="imageURL" type="text" placeholder="Image URL" required />
          </div>
          <div className='form-column'>
            <label htmlFor="inputState">Book Category</label>
            <select id='inputState' name='categoryName' value={selectedBookCategory} onChange={handleChangeSelectedValue} required>
              {bookCategories.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-column'>
            <label htmlFor="bookDescription">Book Description</label>
            <textarea id="bookDescription" name="bookDescription" placeholder="Write your book description..." required rows={4} />
          </div>
          </div>
          <div className='form-row'>
          <div className='form-column'>
            <label htmlFor="bookPDFURL">Book PDF URL</label>
            <input id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required />
          </div>
        </div>
        <button type="submit">Upload Book</button>
      </form>
    </div>
  );
};

export default UploadBook;

















