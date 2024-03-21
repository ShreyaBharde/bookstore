
import { useLoaderData, useParams } from 'react-router-dom';
import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Select } from 'flowbite-react';
import { Textarea } from 'flowbite-react';

const EditBooks=()=>{
    const {id} = useParams();
    const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL} = useLoaderData();

    
const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistry",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "History",
    "Children",
    "Travel"
    
]


const [selectedBookCategory,setSelectedBookCategory]= useState(bookCategories[0])
const handleChangeSelectedValue = (event) =>{
console.log(event.target.value);
setSelectedBookCategory(event.target.value);

}

const handleUpdate = (event) =>{
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageURL = form.imageURL.value;
  const category = form.categoryName.value;
  const bookDescription = form.bookDescription.value;
  const bookPDFURL = form.bookDescription.value;

  const updateBookObj = {
    bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
  }
//   console.log(bookObj)
 fetch(`http://localhost:5000/book/${id}`,{
    method:"PATCH",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(updateBookObj)
 }).then(res=>res.json()).then(data =>{
   
    alert("Book updated successfully")
  })

 

};


return (
  <div className='upload-book-container'>
    <h2>Update A Book</h2>
    <form onSubmit={handleUpdate} className="upload-form">
      <div className='form-row'>
        <div className='form-column'>
          <label htmlFor="bookTitle">Book Title</label>
          <input id="bookTitle" name="bookTitle" type="text" placeholder="Book name" defaultValue={bookTitle}required />
        </div>
        <div className='form-column'>
          <label htmlFor="authorName">Author Name</label>
          <input id="authorName" name="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-column'>
          <label htmlFor="imageURL">Image URL</label>
          <input id="imageURL" name="imageURL" type="text" placeholder="Image URL" defaultValue={imageURL} required />
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
          <textarea id="bookDescription" name="bookDescription" placeholder="Write your book description..." required rows={4} defaultValue={bookDescription}/>
        </div>
        </div>
        <div className='form-row'>
        <div className='form-column'>
          <label htmlFor="bookPDFURL">Book PDF URL</label>
          <input id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" defaultValue={bookPDFURL} required />
        </div>
      </div>
      <button type="submit">Update Book</button>
    </form>
  </div>
);










    





}
export default EditBooks;