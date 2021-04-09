import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <header className="text-left">
        <section className="container">
          <div className="jumbotron">
            <h1>Home Page</h1>
            <p>Something about home</p>
            <button className="btn">Click Me</button>
          </div>
        </section>
      </header>
    );
  }
}

export default Home;
