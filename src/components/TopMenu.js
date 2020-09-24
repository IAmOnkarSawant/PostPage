import React from 'react';
import './TopMenu.css'
const Topmenu=()=>{
    return(
        <div id="quickNavigation">
            <div className="padding">
                <a href="#" className="MenuBtn">Posts</a>
                <a href="#" className="MenuBtn">Discussions</a>
            </div>
            <div className="Post">
                <a href="#" className="createbtn">CreatePost</a>
            </div>
        </div>
    );
}
export default Topmenu;