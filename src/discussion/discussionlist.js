import React from 'react'


import './discussionlist.css';
import Discussions from './discussions';

const PostList= props => {
    console.log(props.properties.length);
    if(props.length===0){
         return (<div className='center'><h4>NO discussions YET</h4></div>);
    }
    return( 
     <ul>
        {  
        props.properties.map(objectContent => {
            return(
            <Discussions key={objectContent.id} 
                id={objectContent.id} 
                heading={objectContent.heading} 
            />);
        })}
     </ul>
    );
};

export default PostList;