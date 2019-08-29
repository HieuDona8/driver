import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';


export class App extends Component {


  render() {
    return (
      <div className="wrap-content">
        <Header></Header>
        <Banner></Banner>
      </div>
    );
  }
}

export default App;