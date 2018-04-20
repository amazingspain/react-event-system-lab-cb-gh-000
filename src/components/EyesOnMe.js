// Code EyesOnMe Component Here
import React from 'react';
export default class EyesOnMe extends React.Component{
  focus = () => console.log("Good");
  blue = () => console.log("Hey eyes on me");
  render(){
    return (
      <div>
      <button onFocus ={this.focus} onBlur={this.blue}> Click me </button>
      </div>
    );
  }
}