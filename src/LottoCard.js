import React, { Component } from "react";
import "./LottoCard.css";
import LottoBall from "./LottoBall";

class LottoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Balls: Array.from({ length: this.props.numBalls }),
      Keys: []
    };
    this.genBalls = this.genBalls.bind(this);
    this.genRando = this.genRando.bind(this);
  }
  genRando = () => {
    let MyBalls = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      let tmpBall = Math.floor(Math.random() * this.props.maxNum) + 1;
      if (!MyBalls.includes(tmpBall)) {
        MyBalls.push(tmpBall);
      } else {
        i--;
      }
    }
    return MyBalls;
  };

  genBalls = () => {
    this.setState((curState) => ({
      Balls: this.genRando()
    }));
  };

  render() {
    return (
      <div className="LottoCard">
        <div className="LottoCard-container">
          <div className="LottoCard-title">{this.props.title}</div>
          <div className="LottoCard-balls">
            {this.state.Balls.map((ballNum) => (
              <div className="LottCard-ball">
                <LottoBall num={ballNum} />
              </div>
            ))}
          </div>
          <div className="LottoCard-button">
            <button className="LottoCard-btn" onClick={this.genBalls}>
              Generate
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default LottoCard;
