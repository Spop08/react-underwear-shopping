import React, { Component } from "react";
import superagent from "superagent";
import ArrowData from "../../Shared/ArrowDataComponent.jsx";
import { LogInCard, Form, Button, H3, H4 } from "../../Shared/styles.js";
import APIPath from '../Api';
import Header from '../Header'

class Signup extends Component {
  constructor() {
  super();
  this.state = {
      invite_token: "",
      password: "",
      username: "",
      email: "",
      showPassword: false,
      error: new Object()
  };
}
handleInviteTokenChanged(event) {
  this.setState({ invite_token: event.target.value });
}
handlePasswordChanged(event) {
  this.setState({ password: event.target.value });
}
handleemailChanged(event) {
  this.setState({ email: event.target.value });
}
handleusernameChanged(event) {
  this.setState({ username: event.target.value });
}
submitForm(event) {
  event.preventDefault();
  const payload = {
    invite_token: this.state.invite_token,
    password: this.state.password,
    username: this.state.username,
    email: this.state.email
  };
  
  superagent
  .post(APIPath + "/api/v1/signup/")
  .set("Content-Type", "application/json")
  .send(payload)
      .then(res => {
          console.log("response is ", res)
          localStorage.setItem("token", res.body.token);
          localStorage.setItem("email" , res.body.email);
          this.props.onSuccessfulSignup();
      })
      .catch(err => {
          console.log("Error response is", err.response);
          this.setState({error: err.response.body.error})
          console.log("this.state is", this.state)
      });
}
hidePassword(){
  this.setState({showPassword : false})
}
showPassword(){
  this.setState({showPassword : true})
}
render() {
  return (
    <div>
      <Header />
      <H4 className="text-white">
        Construct a Leasing Negotiation Table in less than 30 Seconds.
      </H4>
      <LogInCard>
        <Form className="p-3" onSubmit={this.submitForm.bind(this)}>
          <p style={{color:'black',textTransform:'CAPITALIZE',fontSize:'44px',textAlign:'center'}}>Sign up</p>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="material-icons">account_circle</i>
              </span>
            </div>
            <input
              type="text"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.handleusernameChanged.bind(this)}
              placeholder="Username"
          />
          </div>
            {this.state.error.username?<ul><li style={{textAlign:'center', color:'red', margin:'0px', padding:'0px', textAlign:'left'}}>{this.state.error.username[0]}</li></ul>:''} 

            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="material-icons">email</i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleemailChanged.bind(this)}
                placeholder="Email"
            />
          </div>
            {this.state.error.email?<ul><li style={{textAlign:'center', color:'red', margin:'0px', padding:'0px', textAlign:'left'}}>{this.state.error.email[0]}</li></ul>:''} 
            
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="material-icons">fingerprint</i>
                </span>
              </div>
              <input
                type="tel"
                className="form-control"
                value={this.state.invite_token}
                onChange={this.handleInviteTokenChanged.bind(this)}
                placeholder="Invite Token"
              />
            </div>
            {this.state.error.invite_token?<ul><li style={{textAlign:'center', color:'red', margin:'0px', padding:'0px', textAlign:'left'}}>{this.state.error.invite_token[0]}</li></ul>:''} 
          
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="material-icons">vpn_key</i>
                </span>
              </div>
              <input
                type = {!this.state.showPassword?"password":"text"}
                className="form-control"
                value={this.state.password}
                name="password"
                placeholder="Password"
                onChange={this.handlePasswordChanged.bind(this)}
            />