import React from 'react'
import {FaThumbsUp,FaThumbsDown,FaBookmark,FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import '../pages/AllDiscussions';
import './discussions.css';

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
        <div className="center">
        <Link to={`/${props.id}/discussContent`}>
        <li id="plate">
            
                <div className="icon">
                  <FaUser color="#000"/>
                </div>
                <div className='heading-content'>
                    <h4>{props.heading}</h4>
                </div>        
                                
        </li>
        </Link>
        </div>
    );
};

export default Posts;
