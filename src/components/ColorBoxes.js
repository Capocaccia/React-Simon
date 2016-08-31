import React, { Component } from 'react';
var count = 0;
var userInput = [];
var colorList = [
  {backgroundColor: 'yellow'},
  {backgroundColor: 'blue'},
  {backgroundColor: 'red'},
  {backgroundColor: 'green'}
];

export default class ColorBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.initialColor
    }
  }
  handleClick(color){
    userInput.push(color);
    this.setState({
      color: color
    })
  }
  scrollColors(colors) {
    this.interval = setInterval(() => {
      if(count < colors.length){
        this.handleClick(colors[count].backgroundColor);
      } else {
        count = 0;
        this.handleClick(colors[count].backgroundColor);
      }
      count++;
    }, 1000);
  }
  endScrollColors(){
    clearInterval(this.interval);
  }
  render(){
    // this
    var ColorBox = this.props.colorList.map((color, i) => {
      return (
          <div onClick={ () => this.handleClick(color.backgroundColor)} key={i} style={{'height' : '100px', 'width': '100px', 'backgroundColor': color.backgroundColor}}>
          </div>
      )
    });
    return (
        <div>
          <h2>Simon</h2>
          {ColorBox}
          <button onClick={() => this.scrollColors(colorList)}>Cycle through colors</button>
          <button onClick={() => this.endScrollColors()}>Stop Cycling</button>
        </div>
    )
  }
}