import React, { Component } from 'react';
import './Share.css'

class Share extends Component {
  render() {
    return (
      <section className="share">
        <div className="share-title">
          <span>
            Why share with
            <span className="hide-line"><br /></span>
            Drive lan?
          </span>
        </div>
        <div className="share-text">
          <span>
            Hosting is free and Drive lah makes it simple and secure to share your car. You decide the rental price, specific rules (e.g. pets allowed, driving to malaysia) and availability.
          </span>
        </div>
        <a className="share-btn">
          <span>
            Join
          </span>
        </a>
      </section>
    );
  }
}

export default Share;