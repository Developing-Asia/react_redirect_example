
 import {Redirect} from 'react-router-dom';


 import React, { Component } from 'react'

 export default class ContactForm extends React.Component {
    state = {
      toThankyou: false,
    }
    handleSubmit = () => {

        this.setState({
            toThankyou: true
          });
    }
    render() {
      if (this.state.toThankyou === true) {
        return <Redirect to='/thank-you' />
      }
  
      return (
        <div>
          <h1>Contact Form</h1>
                           <form onSubmit={this.handleSubmit}>
                 <br/> <br/>
                     <label>
                         Name:
                         <input type="text" placeholder={"enter your name"}  />
                     </label>
                     <br/><br/>
                     <label>
                         Email:
              
                         <input type="text" placeholder={"enter your email"}  /> 
                     </label>
                    
                     <input type="submit" value="Submit" />
                 </form>
        </div>
      )
    }
  }


