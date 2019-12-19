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