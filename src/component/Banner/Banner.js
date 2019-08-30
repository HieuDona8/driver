import React, { Component } from 'react';
import './Banner.css'
import ListCar from './FindCar.json'

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div>
          <input type="text" name="city" list="cityname" />
          <datalist id="cityname">
            <option value="Boston">
            </option><option value="Cambridge">
            </option></datalist>
        </div>

        <div className="banner-img">
          {
            ListCar.map((item) => {
              console.log(item.nameBrand);
            })
          }
        </div>
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
                    <option defaultValue value disabled>Age of car</option>
                  </select>
                </div>
              </div>
              <div className="submit-data">
                <div className="symol-money">
                  $
                  <span className="special-money">
                  </span>
                </div>
                <a href="true" className="form-btn">
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

//{"Audi":{"Model":[{"A1":[600,560,520]},{"A3":[720,640,560]},{"A4":[1000,920,840]}]}},
  //{"BMW":{"Model":[{"1 Series":[720,640,560]},{"2 Series":[800,720,640]},{"2 Series":[1200,1080,960]}]}}