import React from 'react';

const PostItem = (props) => {
    console.log(props);
    return ( 
        <>
            Post Item
            <div>{props.match.params.id}</div>
        </>
     );
}
 
export default PostItem;