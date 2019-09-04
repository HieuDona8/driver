import React, { Component } from 'react';
import './Cover.css'
import prImg from './../../assets/insuranceLogo-min.bdcac153.png'

class Cover extends Component {
  render() {
    return (
      <section className="cover">
        <div className="cover-content">
          <div className="first-cover">
            <div className="cover-title">
              <span>
                We have you covered!
              </span>
            </div>
            <div className="cover-text">
              <span>
                Your car is automatically covered with comprehensive insurance from Tokio Marine Insurance during the trip. Your car's original insurance and your NCD do not get impacted.
              </span>
            </div>
            <div className="cover-img">
              <img src={prImg}/>
            </div>
            <a className="btn-cover">
              <span>Our insurance policy</span>
            </a>
          </div>

          <div className="trust">
            <div className="trust-title">
              <span>A community&nbsp;
                <span className="hide-trust"><br /></span>
                 built on trust
              </span>
            </div>
            <div className="trust-text">
              <span>We know it’s a priority to trust the people driving your car. Only verified Drive Lah members can book a car.</span>
              <br />
              <br />
              <span>This means we screen every member's name, contact details, NRIC/FIN & driving license.</span>
              <br />
              <span>You can always read reviews from past trips and we are always there for you with 24/7 support.</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;