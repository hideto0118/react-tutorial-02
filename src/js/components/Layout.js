import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  //constructor with state
  constructor() {
    super();
    this.petName = "Buchi🐶";
    this.state = { title: "Eddie" };
  }

  changeTitle(title) {
    this.setState({title});
  }
  
  render() {
    //variables
    let name = "Hideto";
    // let components = [<Header />, <Footer />];
    
    //state set
    // setTimeout(
    //   () => { this.setState({name: "Hello"}); }
    //   , 1000);

    // props
    const title = "Welcome Hideto";

    return (
      //can you write variables here?
      <div>
        {/* <Header title={title} /> */}
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <hr />
        <div>
          <h1>This is state name {this.state.title}</h1>
          <h1>Hi it's {name}!</h1>
          <h1>My cuttie doggy is {this.petName}!</h1>
          <h2>I'm {this.getAge(20, 9)} years old</h2>
          <h2>It's { ((num) => { return 1 + num })(3) }!</h2>
        </div>
        <hr />
        <Footer />
        <hr />
        <div>
          {/* {components} */}
        </div>
      </div>
    );
  }

  //functions
  getAge (secondDigit, firstDigit) {
    return secondDigit + firstDigit;
  }
}