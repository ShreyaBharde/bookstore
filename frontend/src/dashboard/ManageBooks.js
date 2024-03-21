
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setAllBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);
   

 const handleDelete = (id) =>{
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`,{
        method:"DELETE",
    }).then(res => res.json()).then(data => {
        alert("Book is deleted successfully")
       
     } )
 }
return (
        <div className='px-4 my-12'>
            <h2 className='mb-10 mt-10'>Manage A Book</h2>
            
            <Table className='lg:w-[1180px]'>
                <Table.Head >
                    <Table.HeadCell>No.</Table.HeadCell>
                    <Table.HeadCell>Book Name</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Prices</Table.HeadCell>
                    <Table.HeadCell>
                        <span>Edit or Manage</span>
                    </Table.HeadCell>
                </Table.Head>
                {
                (allBooks.map((book, index) => (
                    <Table.Body className="divide-y bg-blue-600" key={book._id}>
                        <Table.Row className="bg-gray-800 text-white dark:bg-gray-800 dark:text-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-white dark:text-white bg-blue-600">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-white-600 dark:text-white">
                                {book.bookTitle}
                            </Table.Cell>
                            <Table.Cell>{book.authorName}</Table.Cell>
                            <Table.Cell>{book.category}</Table.Cell>
                            <Table.Cell>$10.00</Table.Cell>
                            <Table.Cell>
                                 <Link  
                                 className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" 
                                 to={`/admin/dashboard/edit-books/${book._id}`}
                                 >
                                    
                                
                                <button className='bg-sky-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-white-600 '>Edit</button>
                                </Link>

                               <button onClick={() =>handleDelete(book._id)} className='bg-sky-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-white-600 ml-12'>Delete</button>
                       </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                ))
            )}
            </Table>
        </div>
    );
};

export default ManageBooks;
