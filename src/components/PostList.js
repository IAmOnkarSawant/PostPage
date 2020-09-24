import React from 'react'
import './PostList.css';
import Posts from './Post';

const PostList= props => {
    console.log(props.properties.length);
    if(props.length===0){
         return (<div className='center'><h4>NO POSTS YET</h4></div>);
    }
    return( 
     <ul>
        {  
        props.properties.map(objectContent => {
            return(
            <Posts key={objectContent.id} 
                id={objectContent.id} 
                image={objectContent.image} 
                heading={objectContent.heading} 
                upvotes={objectContent.upvotes} 
                downvotes={objectContent.downvotes} 
                public={objectContent.public} 
                alt={objectContent.category} 
            />);
        })}
     </ul>
    );
};

export default PostList;