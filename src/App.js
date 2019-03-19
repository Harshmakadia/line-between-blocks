import React, { Component } from 'react';
import './App.css';
import LineTo, { SteppedLineTo } from 'react-lineto';
class Block extends Component {
  render() {
      const { top, left, color, className } = this.props;
      const style = { top, left, backgroundColor: color };
      return (
          <div
              className={`block ${className}`}
              style={style}
              onMouseOver={this.props.onMouseOver}
              onMouseOut={this.props.onMouseOut}
          >
              {this.props.children}
          </div>
      );
  }
}

class App extends Component {
  render() {
    const style = {
        delay: true,
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderWidth: 3,
    };
    return (
        <fieldset id="stepped-test">
            <legend>Stepped Test</legend>

            Demonstrate how to draw stepped lines.

            <Block
                className="stepped-A"
                top="50px"
                left="90px"
                color="#00f"
                >A</Block>
            <Block
                className="stepped-B"
                top="150px"
                left="20px"
                color="#00f"
                >B</Block>
            <Block
                className="stepped-C"
                top="150px"
                left="90px"
                color="#00f"
                >C</Block>
            <Block
                className="stepped-D"
                top="150px"
                left="160px"
                color="#00f"
                >D</Block>
            <Block
                className="stepped-E"
                top="50px"
                left="300px"
                color="#00f"
                >E</Block>
            <Block
                className="stepped-F"
                top="120px"
                left="300px"
                color="#00f"
                >F</Block>
            <SteppedLineTo from="stepped-A" to="stepped-B"
                fromAnchor="bottom" toAnchor="top" {...style} />
            <SteppedLineTo from="stepped-A" to="stepped-C"
                fromAnchor="bottom" toAnchor="top" {...style} />
            <SteppedLineTo from="stepped-A" to="stepped-D"
                fromAnchor="bottom" toAnchor="top" {...style} />
            <SteppedLineTo from="stepped-A" to="stepped-E"
                fromAnchor="right" toAnchor="left" orientation="h" {...style} />
            <SteppedLineTo from="stepped-A" to="stepped-F"
                fromAnchor="right" toAnchor="left" orientation="h" {...style} />
        </fieldset>
    );
}
}

export default App;
