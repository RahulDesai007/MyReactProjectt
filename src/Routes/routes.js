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
const App = props => (
  <Async load={import('/home/lntinfotech/Desktop/ReactWorkspace/react-test/src/App.js')} componentProps={props} />
)

const Post = props => (
    <Async load={import('../Views/Post/Post')} componentProps={props} />
)

const HomeHeader = props => (
  <Async load={import('../Views/Header/HomeHeader')} componentProps={props} />
)

const Get = props => (
  <Async load={import('../Views/Get/Get')} componentProps={props} />
)

const Delete = props => (
  <Async load={import('../Views/Delete/Delete')} componentProps={props} />
)


const routes = (
  <div>
    <Switch>
      <Redirect exact from="/" to="/Login" />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} /> 
      <Route exact path="/Home" component={Home} /> 
      <Route exact path="/App" component={App} />
      <Route exact path="/Post" component={Post} /> 
      <Route exact path="/HomeHeader" component={HomeHeader} />
      <Route exact path="/Get" component={Get} />
      <Route exact path="/Delete" component={Delete} /> 

       
    </Switch>
  </div>
);

export default routes; 
