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