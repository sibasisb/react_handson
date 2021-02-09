import React from 'react'
import '../Stylesheets/mystyles.css';
export const BookDetails=(props)=>{
    return (
    <div className="bookdet">
        <h1>Book Details</h1>
        <ul>
        {
            props.books.map(book=>{
                return (
                    <div key={book.id}>
                        <li><h3>{book.bname}</h3></li>
                        <li><h4>{book.price}</h4></li>
                    </div>
                );
            })
        }
        </ul>
    </div>);
}