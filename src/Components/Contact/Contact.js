import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <article className="container text-left">
        <div className="jumbotron">
          <h2> This is Contact page</h2>
          <address>
            You can find us here:
            <br />
            Codilar
            <br />
            No.9 ,2nd Floor,shri Krishna Akshaya,BTM 1st phase,27th main Ring
            road,Above Prerana Tata Motors,
            <br />
            Bangalore,Karanataka, 560068
          </address>
        </div>
      </article>
    );
  }
}

export default Contact;
