import React, { Component } from 'react';
import './Delete.css';
import HomeHeader from '../Header/HomeHeader'
import Footer from '../Footer/Footer'
import axios from 'axios'
class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',

        };
        this.handleNameChange = this.handleNameChange.bind(this);
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
    handleNameChange(evt) {
        this.setState({
            name: evt.target.value,
        });
    };

    onSubmitDelete = () => {
        console.log("Calling Ajax function.....")
        console.log(this.state.name)
        const post = {
            name: this.state.name,
        };
        axios.post('http://localhost:8000/route/delete', post, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        })
            .then((responseJson) => {
                console.log("This is my response Json", responseJson.data)
                //  var token = responseJson.data.token;
                // var message = responseJson.message;
                // var userId = responseJson.data.userId;
                var message = responseJson.data.message;
                alert(message)
                if (message === "Deleted Post Sucessfully..") {
                    this.props.history.push('/Home')
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

    onDelete = () => {
        this.props.history.push('/Delete')
      }
    handleRegister = () => {
        this.props.history.push('/Signup')
    }
    onPost = () => {
        this.props.history.push('/Post')
    }
    onPostHome = () => {
        this.props.history.push('/Home')
    }
    onGet = () => {
        this.props.history.push('/Get')
    }

    render() {

        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)
        return (
            <div >
                <HomeHeader clickhome={() => this.onPostHome()}
                    clickget={() => this.onGet()} />
                <h4 className="Delete" >
                    <h2>Delete Data Form</h2>
                    <label>Name :  </label>
                    <input
                        type="text"
                        data-test="name"
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                    <br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        data-test="submit"
                        onClick={this.onSubmitDelete} />
                </h4>
                <Footer />
            </div>
        );
    }
}
export default HomePage;