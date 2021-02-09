import React from 'react'
import '../Stylesheets/mystyles.css';

export const BlogDetails=(props)=>{
    return (
    <div className="blogdet">
        <h1>Blog Details</h1>
        <ul>
        {
            props.blogs.map(blog=>{
                return (
                    <div key={blog.id}>
                        <li><h3>{blog.bname}</h3></li>
                        <li><h4>{blog.instructor}</h4></li>
                        <li><p>{blog.instruction}</p></li>
                    </div>
                );
            })
        }
        </ul>
    </div>);
}