import React, { Component } from 'react'
// import ReactDOM from 'react-dom/client';


class forms extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstname: ''
    }

    this.state = {
      lastname: ''
    }

    this.state = {
      emailAddress:''
    }

    this.state = {
      message:''
    }

  }
  handleFirstnameChange=(event)=> {
  this.setState({
  firstname: event.target.value
})
  }

handleLastnameChange=(event)=> {
  this.setState({
  lastname: event.target.value
})
  }

  handleEmailAddressChange=(event)=> {
  this.setState({
  emailAddress: event.target.value
})
  }

handleMessageChange=(event)=> {
  this.setState({
  message: event.target.value
})
  }

  handleSubmit = event => {
    alert(`${this.state.firstname}
    ${this.state.lastname} 
    ${this.state.emailAddress} 
    ${this.state.message}
    .... We will email member registration documents to the email address provided!...`)
    event.preventDefault()
  }


  render() {
    return (

      <body>
      <form onSubmit={this.handleSubmit} className='memberform' id='Forms'>

      <h2>Member registration form</h2>

      <div className ='frmData'>

        <label for="First_name">First Name:</label> 
        <input type="text" placeholder="Enter first name" value={this.state.firstname} onChange={this.handleFirstnameChange} id="First_name" name="first_name" required></input>
        
      <br/>
        
        <label for="last_name">Last Name:</label> 
        <input type="text" placeholder="Enter last name" value={this.state.lastname} onChange={this.handleLastnameChange} id="last_name" name="last_name" required></input> 
      
      <br/>

        <label for="email_address">Email address:</label> 
        <input type="email" placeholder="Enter email address" value={this.state.emailAddress} onChange={this.handleEmailAddressChange} id="email_address" name="email_address" required></input> 
        
    
        <label for="message">Message:</label> 
        <textarea type="text" placeholder="Enter your message"  value={this.state.message} onChange={this.handleMessageChange} id="message" name="message" required></textarea> 

      <br/>

      <button className='formbtn' type="submit"> Submit </button>
        
      </div>
      
      </form>
      </body>
    )
  }
}

export default forms
