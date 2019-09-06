import React, { Component } from 'react';
import './ReadyShare.css'

class ReadyShare extends Component {
  render() {
    return (
      <section className="ready">
        <div className="ready-content">
          <div className="ready-banner">
            <div className="banner-content">
              <div className="banner-title">
                <span>
                  Ready share &nbsp;
                  <span className="break-title"><br /></span>
                  your car?</span>
              </div>
              <a className="btn-show" href="true">
                <span>list your car</span>
              </a>
            </div>
          </div>
          <div className="info-ready">
            <div className="info-ready-content">
              <span className="info-ready-title">
                Commercial cars?&nbsp;
              </span>
              <span className="info-contac">
                Please call us at +65 3138 9153 or send us an email at support@drivelah.sg
              </span>
            </div>            
          </div>
        </div>
      </section>
    );
  }
}

export default ReadyShare;