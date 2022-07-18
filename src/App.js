import React from "react";

const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
let borderMail = "2px solid red"
let borderpassword = "2px solid red"

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }


handleSubmit = (e) => {
  e.preventDefault()
  if(this.state.emailIsValid == true && this.state.passwordIsValid == true){
    this.setState({
      isSubmitted: true
    })
    console.log(this.state.emailIsValid)
    console.log(this.state.passwordIsValid)
    console.log(this.state)
    this.resetValues()
  }else{
    alert('Fill the fields correctly')
    console.log(this.state.isSubmitted)
  }
}

// handleChange = (e) => {
//   const target = e.target
//   this.setState({
//     [target.name]: target.value,
//   })
// }

handleFirstNameChange = (e) => {
  this.setState({
    firstName: e.target.value
  })
}

handleLastNameChange = (e) => {
  this.setState({
    lastName: e.target.value
  })
}

handleEmailChange = (e) => {
  this.setState({
    email: e.target.value
  })

  if(regex.test(this.state.email)){
    this.setState({
      emailIsValid: true,
    })
    borderMail = "2px solid green"
    document.getElementById('emailInput').classList.add('is-valid')
  }else{
    borderMail = "2px solid red"
  }
}

handlePasswordChange =(e) => {
  this.setState({
    password: e.target.value
  })

  // un petit chose a faire avec le length, >=5 ou >5
  if(this.state.password.length > 5){
    this.setState({
      passwordIsValid: true
    })
    borderpassword = "2px solid green"
    document.getElementById('passwordInput').classList.add('is-valid')
  }else{
    borderpassword = "2px solid red"
  }
}

handleRememberMeChange =(e) => {
  this.setState({
    rememberMe: e.target.checked
  })
}


resetValues = () => {
  this.setState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
  })
  borderMail = "2px solid red"
  borderpassword = "2px solid red"
  document.getElementById('emailInput').classList.remove('is-valid')
  document.getElementById('passwordInput').classList.remove('is-valid')

}

  render() {
    return (
      <div className="d-flex align-items-center flex-column mt-4">
        <h1>Login</h1>
        {this.state.isSubmitted ? <p>Hello there {this.state.firstName} {this.state.lastName}, Welcome </p> : <form onSubmit={this.handleSubmit}>

            {/* firstName */}
            <div className="mb-3">
              <label htmlFor="fNameInput" className="form-label">First Name</label>
              <input type="text" name='firstName' className="form-control" id="fNameInput" value={this.state.firstName} onChange={this.handleFirstNameChange} required/>
            </div>

            {/* lastName */}
            <div className="mb-3">
              <label htmlFor="lNameInput" className="form-label">Last Name</label>
              <input type="text" name='lastName' className="form-control" id="lNameInput" value={this.state.lastName} onChange={this.handleLastNameChange} required/>
            </div>

            {/* email */}
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input type="email" name='email' className="form-control" id="emailInput" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange} required style={{border: borderMail}}/>
            </div>

            {/* password */}
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input type="password" name='password' className="form-control" id="passwordInput" value={this.state.password} onChange={this.handlePasswordChange} required style={{border: borderpassword}}/>
            </div>

            {/* checkbox */}
            <div className="mb-3 form-check">
              <input type="checkbox" name='rememberMe' className="form-check-input" id="checkboxInput" value={this.state.rememberMe} onChange={this.handleRememberMeChange}/>
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>

            {/* submit */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        }
      </div>
    );
  }
}

export default App;
