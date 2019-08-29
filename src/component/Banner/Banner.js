import React, { Component } from 'react';
import './Banner.css'

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="banner-img"></div>
        <div className="find-car">
          <div className="find-car-content">
            <div className="find-car-title">
              <span>Let your car<br/>work for you!</span>
            </div>
            <div className="find-about">
              <span>
                Find out what you could earn
              </span>
            </div>
            <form className="form">
              <div className="input-data">
                <div className="brand">
                  <input type="text" placeholder="Brand"/>
                </div>
                <div className="model">
                  <input type="text" placeholder="Model" />
                </div>
                <div className="age-year">
                  <select>
                    <option selected value disabled>Age of car</option>
                  </select>
                </div>
              </div>
              <div className="submit-data">
                <div className="symol-money">
                  $
                  <span className="special-money">
                  </span>
                </div>
                <a className="form-btn">
                  <span>list your car</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;