import React from "react";
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

  const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  const isValid = regEx.test(e.target.value)

  this.setState({
    email: e.target.value,
    emailIsValid: isValid
  })
}

handlePasswordChange =(e) => {

  const isValid = e.target.value.length > 5

  this.setState({
    password: e.target.value,
    passwordIsValid : isValid
  })
}

handleRememberMeChange =(e) => {

  this.setState({
    rememberMe: e.target.checked
  })

}


handleSubmit = (e) => {
  e.preventDefault()

  if(this.state.emailIsValid && this.state.passwordIsValid){
    this.setState({
      isSubmitted : true
    })
  }else{
    alert('Fill the fields correctly')
  }
}

  render() {
    const validEmail = `form-control ${this.state.emailIsValid ? 'is-valid' : 'is-invalid'}`
    const validPassword = `form-control ${this.state.passwordIsValid ? 'is-valid' : 'is-invalid'}`

    return (
      <div className="d-flex align-items-center flex-column mt-4">
        <h1>Login</h1>
        {
          this.state.isSubmitted ?
            (
              <p>Hello there {this.state.firstName} {this.state.lastName}, Welcome </p>
            ) : (
              <form onSubmit={this.handleSubmit}>

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
                  <input type="email" name='email' className={validEmail} id="emailInput" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange} required/>
                </div>

                {/* password */}
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <input type="password" name='password' className={validPassword} id="passwordInput" value={this.state.password} onChange={this.handlePasswordChange} required/>
                </div>

                {/* checkbox */}
                <div className="mb-3 form-check">
                  <input type="checkbox" name='rememberMe' className="form-check-input" id="checkboxInput" value={this.state.rememberMe} onChange={this.handleRememberMeChange}/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>

                {/* submit */}
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          )
        }
      </div>
    );
  }
}

export default App;
