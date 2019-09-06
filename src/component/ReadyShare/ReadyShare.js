import React, { Component } from 'react';
import './ReadyShare.css'

class ReadyShare extends Component {
  render() {
    return (
      <section className="ready">
        <div className="ready-content">
          <div className="ready-banner">
            <div className="banner-title">
              <span>
                Ready share 
                <span className="break-title"><br /></span>
                your car?</span>
            </div>
            <a className="btn-show" href>
              <span>list your car</span>
            </a>
          </div>
          <div className="info-ready">
            <div className="info-ready-title">
              <span>Commercial cars?</span>
            </div>
            <div className="info-contac">
              <span>Please call us at +65 3138 9153 or send us an email at support@drivelah.sg</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ReadyShare;