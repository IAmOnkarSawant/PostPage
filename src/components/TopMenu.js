import React from 'react';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import Post from './write_post';
import './TopMenu.css';

export default function FlexShrink() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} width="100%" bgcolor="grey.300">
            <Link to="/posts" className="MenuBtn padding" >Posts</Link>
            <Link to="/discussions" className="MenuBtn padding">Discussions</Link>
        </Box>
        <Box p={1} flexShrink={0} bgcolor="grey.300">
            <div exact className="createbtn">CREATE{<Post/>}</div>
        </Box>
      </Box>
    </div>
  );
}
