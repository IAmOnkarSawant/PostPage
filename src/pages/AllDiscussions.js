import React from 'react';
import DiscList from '../discussion/discussionlist';


const AllDiscussion = props =>{

    const AllDiscussionTopics=[

        {
            id:'1',
            category:'python',
            heading:"here is How I learned python in 20days hkjfahdskljg akjsbf jadbshflkjabsf vasjdvljk ",
            upvotes:'15',
            downvotes:'15',
            public:1,
        },
        {
            id:'2',
            category:'python',
            heading:"Looking for Best way to learn python..",
            upvotes:'100',
            downvotes:'15',
            public:'1',
        },
        {
            id:'1',
            category:'python',
            heading:"here is How I learned python in 20days hkjfahdskljg akjsbf jadbshflkjabsf vasjdvljk ",
            upvotes:'15',
            downvotes:'15',
            public:1,
        },
        {
            id:'2',
            category:'python',
            heading:"Looking for Best way to learn python..",
            upvotes:'100',
            downvotes:'15',
            public:'1',
        }
               
            ];                 
            return <DiscList properties={AllDiscussionTopics}/>
};

export default AllDiscussion;