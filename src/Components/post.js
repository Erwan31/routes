import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {

    const ids= [
        { id:1, name: 'Post 1'},
        { id:2, name: 'Post 2'},
        { id:3, name: 'Post 3'},
        { id:4, name: 'Post 4'},
    ];

    /*
    const list = ids.map( (item) => (
        <div key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.name}</Link>
        </div>
    ))
    */

    return ( 
        ids.map( (item) => (
            <div key={item.id}>
                <Link to={`/posts/${item.id}`}>{item.name}</Link>
            </div>
        ))
     );
}
 
export default Post;