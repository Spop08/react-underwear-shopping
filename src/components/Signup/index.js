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
            { !this.state.showPassword ?(
                    <div className="input-group-apppend">
                    <div className="input-group-text">
                    <a href="javascript:;" onClick={this.showPassword.bind(this)}>
                    <i className="material-icons">visibility</i>
                    </a>
                    </div>
                    </div>):
              (<div className="input-group-apppend">
               <div className="input-group-text">
               <a href="javascript:;" onClick={this.hidePassword.bind(this)}>
               <i className="material-icons">visibility_off</i>
               </a>
               </div>
               </div>)}      
        </div>
            {this.state.error.password?<ul><li style={{textAlign:'center', color:'red', margin:'0px', padding:'0px', textAlign:'left'}}>{this.state.error.password[0]}</li></ul>:''} 
            <Button className="btn btn-lg btn-primary" type="submit">
              Sign Up
            </Button>
          </Form>
          <svg
            className="rocks"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              className="svg--sm"
              fill="red"
              points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
            />
            <polygon
              className="svg--lg"
              fill="red"
              points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
            />
          </svg>
          <svg className="gradient">
            <defs>
              <linearGradient id="grad">
                <stop offset="0" stopColor="#97ABFF" />
                <stop offset="1" stopColor="#123597" />
              </linearGradient>
            </defs>
          </svg>
        </LogInCard>
        <div className="row p-0 text-center text-white data-row">
          <div className="col-md-4">
            <img src="/assets/document.svg" />
            <h5 className="my-4">
              Our Machine Learning Analysis, Your Leasing Contracts
            </h5>
          </div>
          <div className="col-md-4">
            <img src="/assets/clock.svg" />
            <h5 className="my-4">Review takes less than a minute</h5>
          </div>
          <div className="col-md-4">
            <img src="/assets/cloud.svg" />
            <h5 className="my-4">Download a negotiation table</h5>
          </div>
        </div>
        <ArrowData />
      </div>
    );
  }
}

export default Signup;
