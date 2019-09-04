import React, { Component } from 'react';
import './Work.css'
import ImgVideo from './../../assets/videoLogo.6f135bad.png'

class Work extends Component {
  render() {
    return (
      <section className="work">
        <div className="work-content">
          <div className="watch">
            <div className="watch-content">
              <div className="title-watch">
                <span>See how it works</span>
              </div>
              <div className="watch-text">
                <span>Drive lah makes it simple and secure to share your car with real people. Watch our short how it works video.</span>
              </div>
            </div>
            <div className="watch-video">
              <img src={ImgVideo}/>
            </div>
            <div className="watch-modal">
              <div className="watch-modal-content">
                <div className="control">
                  <button className="control-btn">
                    <span>CLOSE</span>
                    <svg class="Modal__closeIcon__34RPE" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-1 -1)" fill-rule="evenodd"><rect transform="rotate(45 7 7)" x="-1" y="6" width="16" height="2" rx="1"></rect><rect transform="rotate(-45 7 7)" x="-1" y="6" width="16" height="2" rx="1"></rect></g></svg>
                  </button>
                </div>

                <div className="video">
                  <div className="video-content">
                    <iframe src="https://www.youtube.com/embed/OaOzjZiVaws"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="break-line">
          </div>
          <div className="info">
            <div className="info-title">
              <span>Enjoy the benefits of sharing in 3 simple steps</span>
            </div>
            <div className="list-info">
              <div className="info-item before-one">
                <div className="item-title">
                  <span>Get booking requests</span>
                </div>
                <div className="item-text">
                  <span>Promote your car and sit back and relax for your first booking request to come in.</span>
                </div>
              </div>
              <div className="info-item before-two">
                <div className="item-title">
                  <span>Rent out your car</span>
                </div>
                <div className="item-text">
                  <span>You’re in full control of your pricing, availability, accepting or declining. And we have you covered with our insurance policy.</span>
                </div>
              </div>
              <div className="info-item before-three">
                <div className="item-title">
                  <span>Get paid</span>
                </div>
                <div className="item-text">
                  <span>Let your car work for you. Within 3-5 days of the trip, you will receive the payment directly into your bank account</span>
                </div>
              </div>
            </div>
           </div>
        </div>
      </section>
    );
  }
}

export default Work;