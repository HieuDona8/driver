import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Share from '../Share/Share';
import Cover from '../Cover/Cover';
import Work from '../Work/Work';


export class App extends Component {


  render() {
    return (
      <div className="wrap-content">
        <Header></Header>
        <Banner></Banner>
        <Share></Share>
        <Cover></Cover>
        <Work></Work>
      </div>
    );
  }
}

export default App;