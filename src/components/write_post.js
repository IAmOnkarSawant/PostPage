
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if ((event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}  
    >  

    <List>
    { 
        <div className="allignment">
        <ListItem button key='Create Post'>
        <ListItemText primary='Create Post' />
        </ListItem>
        <div className="displayPost">
        <form action="upload" method="post" enctype="multipart/form-data">
        
        <hr/>
        <div className="uploadSection">
            <div>
                <label for="pic_photo">Photo: </label>
                <input type="file" name="pic_photo " id="pic_photo" multiple/><br/>
                <input type="submit" value="Upload"/>
            </div>
            <div>
                <label for="file_photo">Photo: </label>
                <input type="file" name="file_photo " id="file_photo" multiple/><br/>
                <input type="submit" value="Upload"/>
            </div>
        </div>
        
        </form>
        </div>
        </div>  
    }
    </List>
      
    </div>
  );

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}





// import React from 'react';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';

// import './write_post.css';
// const Post =props =>{
// return(<FormControl fullWidth  variant="outlined" className="width">
//           <InputLabel htmlFor="outlined-adornment-amount">Heading</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             onChange="Hello"
//             startAdornment={<InputAdornment position="start">:</InputAdornment>}
//             labelWidth={60}
//           />
// </FormControl>);
// }

// export default Post; 