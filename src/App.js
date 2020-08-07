import React from 'react';
import Profile from './Components/profile';
import Home from './Components/home';
import Post from './Components/post';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import PostItem from './Components/postitem';
import NotFound from './Components/404';
import Conditional from './Components/conditional';


function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 mb-3 border-bottom">
          <h5 className="my-0 mr-md-auto font-weight-normal">MyApp</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <NavLink 
            to="/" className="p-2 text-dark"
            activeStyle={{fontWeight:'bold'}}
            activeClassName="selected"
            exact>Home</NavLink>
            <NavLink 
            to="/posts" className="p-2 text-dark"
            activeStyle={{fontWeight:'bold'}}
            activeClassName="selected">Posts</NavLink>
            <NavLink 
            to="/profile" className="p-2 text-dark"
            activeStyle={{fontWeight:'bold'}}
            activeClassName="selected">Profile</NavLink>
            <NavLink 
            to="/conditional" className="p-2 text-dark"
            activeStyle={{fontWeight:'bold'}}
            activeClassName="selected">Conditional</NavLink>
          </nav>
        </div>
      </header>
      <div className="container">
        <Switch>
          <Redirect from="/profile" to="/"></Redirect>
          <Route path="/posts/:id" component={PostItem}/>
          <Route path="/posts" component={Post}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/conditional" component={Conditional}/>
          <Route path="/" component={Home} exact/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
