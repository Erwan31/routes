import React from 'react';
import Profile from './Components/profile';
import Home from './Components/home';
import Post from './Components/post';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PostItem from './Components/postitem';


function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 mb-3 border-bottom">
          <h5 className="my-0 mr-md-auto font-weight-normal">MyApp</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link to="/" className="p-2 text-dark">Home</Link>
            <Link to="/posts" className="p-2 text-dark">Posts</Link>
            <Link to="/profile" className="p-2 text-dark">Profile</Link>
          </nav>
        </div>
      </header>
      <Route path="/" component={Home} exact/>
      <Route path="/posts" component={Post} exact/>
      <Route path="/posts/:id" component={PostItem} exact/>
      <Route path="/profile" component={Profile} exact/>
    </BrowserRouter>
  );
}

export default App;
