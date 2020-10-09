import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

import MainNavigation from './navigation/MainNavigation';
import TopNav from './components/TopMenu';
import Posts from './pages/Allposts';
import Post from './components/write_post';
import Dissc from './pages/AllDiscussions';
// import EditorField from './components/Editior';

import './navigation/MainNavigation.css'
import './App.css';
class App extends Component {
  render(){
    return(
      <Router>
        <MainNavigation/>
        <main className='body-div'>
          <Switch>
            <Route path="/posts">
                <TopNav/>
                <div className="post-alignment">
                  <Posts/> 
                </div>
            </Route>
            <Route path="/discussions">
                <TopNav/>
                 <div className="topic">
                <h1>Trending Topics</h1>
                </div>
                <div className="post-alignment">
                  <Dissc/> 
                </div>
            </Route>
            <Redirect to='/'/>
          </Switch>
        </main>
        <footer> Bye Bye</footer>
      </Router>

    );
  }    
}

export default App;
