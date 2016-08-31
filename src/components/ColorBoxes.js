import React, { Component } from 'react';

export default class ColorBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.initialColor
    }
  }
  handleClick(color){
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
          <h2 style={{color: this.state.color}}>Click a box and I change</h2>
          <h3>Color Selected: {this.state.color}</h3>
          {ColorBox}
          <button onClick={() => this.scrollColors(colorList)}>Cycle through colors</button>
          <button onClick={() => this.endScrollColors()}>Stop Cycling</button>
        </div>
    )
  }
}