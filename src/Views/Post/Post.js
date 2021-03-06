import React, { Component } from 'react';
import './Post.css';
import HomeHeader from '../Header/HomeHeader'
import Footer from '../Footer/Footer'
import axios from 'axios'
class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            place: '',
            gender: '',
            error: '',
        };
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
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
    handleAgeChange(evt) {
        this.setState({
            age: evt.target.value,
        });
    };

        handlePlaceChange(evt) {
            this.setState({
                place: evt.target.value,
            });
        }

        handleGenderChange(evt) {
            this.setState({
                gender: evt.target.value,
            });
    }

    onSubmitPost = () => {
        console.log("Calling Ajax function.....")
        console.log(this.state.name)
        const post = {
            name: this.state.name,
            age: this.state.age,
            place: this.state.place,
            gender: this.state.gender,
        };
        axios.post('http://localhost:8000/route/posts', post, {
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
                if (message === "Post created successfully!") {
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
                <h4 className="Post" >
                    <h2>Post Data Form</h2>
                    <label>Name :  </label>
                    <input
                        type="text"
                        data-test="name"
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                    <br /><br />
                    <label>Age :  </label>
                    <input
                        type="text"
                        data-test="age"
                        value={this.state.age}
                        onChange={this.handleAgeChange} />
                    <br /><br />
                    <label>Place :  </label>
                    <input
                        type="text"
                        data-test="place"
                        value={this.state.place}
                        onChange={this.handlePlaceChange} />
                    <br /><br />
                    <label>Gender :  </label>
                    <input
                        type="text"
                        data-test="gender"
                        value={this.state.gender}
                        onChange={this.handleGenderChange} />
                    <br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        data-test="submit"
                        onClick={this.onSubmitPost} />
                </h4>
                <Footer />
            </div>
        );
    }
}
export default HomePage;