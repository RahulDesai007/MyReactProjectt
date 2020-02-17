import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Async from 'react-code-splitting';


const Login = props => (
  <Async load={import('../Views/LoginPage/Login')} componentProps={props} />
)

const Signup = props => (
    <Async load={import('../Views/Signup/Signup')} componentProps={props} />
  )

const Home = props => (
    <Async load={import('../Views/HomePage/Home')} componentProps={props} />
)

const Post = props => (
    <Async load={import('../Views/Post/Post')} componentProps={props} />
)

const routes = (
  <div>
    <Switch>
      <Redirect exact from="/" to="/Login" />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} /> 
      <Route exact path="/Home" component={Home} /> 
      <Route exact path="/Post" component={Post} /> 
    </Switch>
  </div>
);

export default routes; 
