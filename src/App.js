import React from "react";
// const listtable = []
const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
let borderMail = "2px solid red"
let borderpassword = "2px solid red"

class App extends React.Component {
  constructor(){
    super()

    this.state = {
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
  if(this.state.emailIsValid && this.state.passwordIsValid){
    this.setState({
      isSubmitted : true
    })
    console.log(this.state)
    this.resetValues()

  }else{
    alert('Fill the fields correctly')
  }
}

// handleChange = (e) => {
//   const target = e.target
//   this.setState({
//     [target.name]: target.value,
//   })
// }

handleEmailChange = (e) => {

  this.setState({
    email: e.target.value
  })

  if(regex.test(this.state.email)){
    this.setState({
      emailIsValid: true,
    })
    borderMail = "2px solid green"
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

  }
}

handleRememberMeChange =(e) => {
  this.setState({
    rememberMe: e.target.checked
  })
}


resetValues = () => {
  this.setState({
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
  })
  borderMail = "2px solid red"
  borderpassword = "2px solid red"
}

  render() {
    return (
      <div className="d-flex align-items-center flex-column mt-4">
        <h1>Login</h1>
        {this.state.isSubmitted ? <p>Hello here</p> :
          <form onSubmit={this.handleSubmit}>

            {/* email */}
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input type="email" name='email' className="form-control" id="emailInput" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange} required style={{border: borderMail}}/>
            </div>

            {/* password */}
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input type="password" name='password' className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handlePasswordChange} required style={{border: borderpassword}}/>
            </div>

            {/* checkbox */}
            <div className="mb-3 form-check">
              <input type="checkbox" name='rememberMe' className="form-check-input" id="exampleCheck1" value={this.state.rememberMe} onChange={this.handleRememberMeChange}/>
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
