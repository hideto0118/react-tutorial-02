import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  //constructor
  constructor() {
    super();
    this.petName = "Buchi🐶";
  }
  
  render() {
    //variables
    let name = "Hideto";
    let components = [<Header />, <Footer />];
    
    return (
      //can you write variables here?

      <div>
        <Header />
        <Header />
        <hr />
        <div>
          <h1>Hi it's {name}!</h1>
          <h1>My cuttie doggy is {this.petName}!</h1>
          <h2>I'm {this.getAge(20, 9)} years old</h2>
          <h2>It's { ((num) => { return 1 + num })(3) }!</h2>
        </div>
        <hr />
        <Footer />
        <hr />
        <div>
          {components}
        </div>
      </div>
    );
  }

  //functions
  getAge (secondDigit, firstDigit) {
    return secondDigit + firstDigit;
  }
}