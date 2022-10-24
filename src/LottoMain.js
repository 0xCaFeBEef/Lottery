import React, { Component } from "react";
import LottoCard from "./LottoCard";
class LottoMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      numBalls: this.props.numBalls,
      maxNum: this.props.manNum
    };
  }
  render() {
    return (
      <LottoCard
        title={this.props.title}
        numBalls={this.props.numBalls}
        maxNum={this.props.maxNum}
      />
    );
  }
}

export default LottoMain;
