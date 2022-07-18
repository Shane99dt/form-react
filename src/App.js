import React from "react";
const listtable = []
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
  // if(this.state.emailIsValid && this.state.passwordIsValid){

  // }
  console.log(listtable)
  this.resetState()
}

// handleChange = (e) => {
//   const target = e.target
//   this.setState({
//     [target.name]: target.value,
//   })
// }

// emailValidation = () => {
  // const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
  // if(regex.test(this.state.email)){
  //   this.setState({
  //     emailIsValid: true
  //   })
  // }
// }

handleEmailChange = (e) => {
  const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/

  this.setState({
    email: e.target.value
  })

  if(regex.test(this.state.email)){
    this.setState({
      emailIsValid: true,
    })
    console.log('fuckkkk')
  }
}

handlePasswordChange =(e) => {
  this.setState({
    password: e.target.value
  })

  // un petit chose a faire avec le length, >=5 ou >5
  if(this.state.password.length > 5){
    console.log(this.state.password)
    this.setState({
      passwordIsValid: true
    })
  }
}

handleRememberMeChange =(e) => {
  this.setState({
    rememberMe: e.target.checked
  })
}


resetState = () => {
  this.setState({
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
  })
}

  render() {
    return (
      <div className="d-flex align-items-center flex-column mt-4">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="emailInput" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input type="password" name='password' className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handlePasswordChange} required/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" name='rememberMe' className="form-check-input" id="exampleCheck1" value={this.state.rememberMe} onChange={this.handleRememberMeChange}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
