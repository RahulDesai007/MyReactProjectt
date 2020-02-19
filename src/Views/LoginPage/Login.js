import React, { Component } from 'react';
import './Login.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'
class LoginPage extends Component {
constructor() {
super();
this.state = {
username: 'rahdesai7@gmail.com',
password: 'Rpqb@123',
error: '',
};
this.handlePassChange = this.handlePassChange.bind(this);
this.handleUserChange = this.handleUserChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.dismissError = this.dismissError.bind(this);
}
dismissError() {
this.setState({ error: '' });
}
handleSubmit(evt) {
evt.preventDefault();
if (!this.state.username) {
return this.setState({ error: 'Username is required' });
}
if (!this.state.password) {
return this.setState({ error: 'Password is required' });
}
return this.setState({ error: '' });
}
handleUserChange(evt) {
this.setState({
username: evt.target.value,
});
};
handlePassChange(evt) {
this.setState({
password: evt.target.value,
});
}
handleRegister = () => {
  this.props.history.push('/Signup')
}
handleLogin = () => {
  console.log("Calling Ajax function.....")
  console.log(this.state.username)
  console.log(this.state.password)
  const post = {
    email: this.state.username,
    password:  this.state.password
  };
  axios.post('http://localhost:8000/auth/login', post, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'content-type': 'application/json',
  },
})
      .then((responseJson) => {
        console.log("This is my response Json", responseJson.data)
        var token = responseJson.data.token;
       // var message = responseJson.message;
        var userId = responseJson.data.userId;
        var message = responseJson.data.message;
        console.log("token"+ token);
        console.log("userId"+userId);
        alert(message)
        if (message === "Login Sucessfull"){
          this.props.history.push('/Home', {token : token})
        }
        // if (message === 'User Not Found !' || message === ' Email or Password wrong!' || message === 'Register Please!') {
        //          } else  {
        //         (message === 'undefined')
        //          console.log("Homepage");
        //          console.log('token'+token);
        //        //  this.props.navigation.navigate('HomePage',{token: token,user:user});
        //     }
       
      })
      .catch((error) => {
        console.error(error);
      });
}


render() {
    
// NOTE: I use data-attributes for easier E2E testing
// but you don't need to target those (any css-selector will work)
return (
  <div>
  <Header/>
<div className="Login">
  
<form onSubmit={this.handleSubmit}>
{
this.state.error &&
<h3 data-test="error" onClick={this.dismissError}>
<button onClick={this.dismissError}>✖</button>
{this.state.error}
</h3>
}
<label>User Name :  </label>
<input 
type="text" 
data-test="username" 
value={this.state.username} 
onChange={this.handleUserChange} />
<br/><br/>
<label>Password :  </label>
<input 
type="password" 
data-test="password" 
value={this.state.password} 
onChange={this.handlePassChange} />
<br/><br/>
<input 
type="submit" 
value="Log In" 
data-test="submit" 
onClick={this.handleLogin}/>
<h6>Not you signed up?<a href="" onClick={this.handleRegister}>Register here</a> </h6>
</form>
</div>
<Footer/>
</div>
);
}
}
export default LoginPage;