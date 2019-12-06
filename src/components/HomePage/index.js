import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from "../Header"
import HeaderHome from "../HeaderHome"
import HeaderMain from "../HeaderMain"
import NavBar from "../NavBar"
import MainBody from "./MainBody"
import Footer from "../Footer"
class HomePage extends  Component {
  state = {
    isAuthenticated: false
  }

  render() {
    return (
        <div>
            <HeaderMain />
            <MainBody />
            <Footer />
        </div>
      );
    }
}

export default HomePage;
