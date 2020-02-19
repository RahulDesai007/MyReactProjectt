import React, { Component } from 'react';
import './Get.css';
import HomeHeader from '../Header/HomeHeader'
import Footer from '../Footer/Footer'
import axios from 'axios'
 var data = [];
class HomePage extends Component {
constructor() {
super();
this.state = {
  data,
  title : ['Name', 'Age', 'Place', 'Gender']
};


}

onPost = () => {
    this.props.history.push('/Post')
  }


  componentDidMount() {

      axios.get('http://localhost:8000/route/posts', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
    })
        .then((responseJson) => {
            console.log("This is my response Json", responseJson.data)
            console.log("Get Data------>>>", responseJson.data.posts[0])
            //  var token = responseJson.data.token;
            // var message = responseJson.message;
            // var userId = responseJson.data.userId;
           
            data = responseJson.data.posts
            console.log("data",data)
            var message = responseJson.data.message;
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

onPostHome = () => {
    this.props.history.push('/Home')
}

onDelete = () => {
    this.props.history.push('/Delete')
  }
  
renderTableHeader() {
    var header = ['Name', 'Age', 'Place', 'Gender']
    console.log("header---->", header)
    return header.map((header) => {
       return <th>{header}</th>
    })
 }

 renderTableData() {
    return this.state.data.map((data, index) => {
       const { name, age, place, gender } = data //destructuring
       return (
          <tr>
             <td>{name}</td>
             <td>{age}</td>
             <td>{place}</td>
             <td>{gender}</td>
          </tr>
       )
    })
 }
  
render() {
     
// NOTE: I use data-attributes for easier E2E testing
// but you don't need to target those (any css-selector will work)
return (
  <div >
  <HomeHeader clickhome={() => this.onPostHome() } 
  click={() => this.onPost()}   clickdelete={() => this.onDelete()}/>
         <div>
            <h1 id='title' >Get Data</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
<Footer/>
</div>
);
}
}
export default HomePage;