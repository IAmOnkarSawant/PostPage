import React from 'react'
import {FaThumbsUp,FaThumbsDown,FaBookmark} from 'react-icons/fa';
import {Link} from 'react-router-dom';


import '../pages/Allposts';
import './Post.css';

const Posts= props => {
  
 
    const increaseUpvotes=()=>{
        /*props.upvotes+=1; */ 
    }
    const decreaseUpvotes=()=>{
       /* props.downvotes+=1;*/
    }
    const addToBookmark=()=>{
        /*
            if signed in add to book mark
            else redirect to signin page
        */
    }
    return(
        <li id="card">
            <div className='analysis'>
                  <div className="updown-fields" onClick={increaseUpvotes}><FaThumbsUp title='Up-Votes'/>&nbsp;&nbsp;{props.upvotes}</div>
                    <div className="updown-fields"onClick={decreaseUpvotes}><FaThumbsDown title='Down-Votes'/>&nbsp;&nbsp;{props.downvotes}</div>
                    <div className="updown-fields" onClick={addToBookmark}><FaBookmark title='Bookmark'/></div>
            </div>
            <Link to={`/${props.id}/postContect`}>
                <div className='heading-content'>
                    <h4>{props.heading}</h4>
                </div>
                <div >
                    <img id="imgPost" src={props.image} alt={props.alt}></img>
                </div>
            </Link>
                
        </li>
    );
};

export default Posts;














/*import React from 'react'
import './Posts.css'
const Card=()=>{
    return(
        
    );
}

export default Card;*/