import React from 'react';
import PostList from '../components/PostList'

const Allposts= props => {                   //temporary data(Sample)
    const POSTS =[
        {
            id:'1',
            category:'python',
            heading:"here is How I learned python in 20days ",
            upvotes:'15',
            downvotes:'15',
            public:1,
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        },
        {
            id:'2',
            category:'python',
            heading:"Looking for Best way to learn python..",
            upvotes:'100',
            downvotes:'15',
            public:'1',
            image:'https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png',
        },
        {
            id:'3',
            category:'react',
            heading:"Top 20 hackes in python that will blow your mind",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        },
        {
            id:'4',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry run around",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://th.bing.com/th/id/OIP.-sCP98pzkM1vWHhutcC4YgHaHa?pid=Api&rs=1',
        },
        {
            id:'5',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry take bath",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://th.bing.com/th/id/OIP.-sCP98pzkM1vWHhutcC4YgHaHa?pid=Api&rs=1',
        },
        {
            id:'6',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry have ***",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        },
        {
            id:'7',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        },
        {
            id:'8',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        },
        {
            id:'9',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        },
        {
            id:'10',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        },
        {
            id:'11',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        },
        {
            id:'12',
            category:'python',
            heading:"Lorem Ipsum is simply dummy industry",
            upvotes:'10',
            downvotes:'5',
            public:'1',
            image:'https://computingsavvy.com/wp-content/uploads/2019/01/python-1.png',
        }
    ]                 
    return <PostList properties={POSTS}/>
};

export default Allposts;






