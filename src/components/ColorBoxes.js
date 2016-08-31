import React, { Component } from 'react';
var count = 0;
var colorList = [
  {backgroundColor: 'yellow'},
  {backgroundColor: 'blue'},
  {backgroundColor: 'red'},
  {backgroundColor: 'green'}
];
var simonsChosenColors = [];
var userColorChoices = [];

export default class ColorBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.initialColor,
      gameState: false,
      simonsColors: [],
      shownColorIndex: -1
    }
  }
  gameStart(){
    if(!this.state.gameState){
      this.state.gameState = true;
      var howManyColorsSimonWants = Math.floor((Math.random() * 10) + 1);
      console.log(howManyColorsSimonWants);
      while(howManyColorsSimonWants--){
        this.simonsChoice();
      }
      this.interval = setInterval(()=> {
        const newState = Object.assign({}, this.state, {shownColorIndex: this.state.shownColorIndex + 1});
        this.setState(
            newState
        );
        var shownColor = this.state.simonsColors[this.state.shownColorIndex];
        if(!shownColor){
          clearInterval(this.interval);
        }
      }, 1500)
    }
  }

  gameReset(){
    if(this.state.gameState){
      this.state.gameState = false;
      this.gameStart();
      clearInterval(this.interval);
    }
  }

  simonsChoice(){
    var simonsColor = Math.round(Math.random() * (colorList.length - 1));
    simonsChosenColors.push(colorList[simonsColor].backgroundColor);
    const newState = Object.assign({}, this.state, {simonsColors: simonsChosenColors});
    this.setState(
      newState
    );
  }

  handleClick(color){
    userColorChoices.push(color);
    this.setState({
      color: color
    })
  }

  getRandomColor(){
    var simonsColor = Math.round(Math.random() * (colorList.length - 1));
    return colorList[simonsColor].backgroundColor;
  }

  render(){
    // this
    var shownColorIndex = this.state.shownColorIndex;
    var simonsColors = this.state.simonsColors;
    var activeColor = simonsColors[shownColorIndex];
  console.log(activeColor);
    var ColorBox = this.props.colorList.map((color, i) => {
      const isActive = (color.backgroundColor == activeColor) ? '5px solid black' : '';
      return (
          <div onClick={ () => this.handleClick(color.backgroundColor)} key={i} style={{'height' : '100px', 'width': '100px', 'backgroundColor': color.backgroundColor, 'border': isActive}}>
          </div>
      )
    });
    return (
        <div>
          <h2>Simon</h2>
          <button onClick={() => this.gameStart()}>Start</button>
          <button onClick={() => this.gameReset()}>Reset</button>
          {ColorBox}
        </div>
    )
  }
}