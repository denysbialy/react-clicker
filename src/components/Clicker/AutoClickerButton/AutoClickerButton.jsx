import React, { Component } from "react";

class Autoclickerbutton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null,
      countSeconds: 0,
    };
    this.isRendered = false;
  }

  componentDidMount() {
    if (this.isRendered) {
      return;
    }
    this.startAutoClicker();

    this.isRendered = true;
    setTimeout(() => {
      this.stopAutoClicker();
    }, 30000);
  }

  startAutoClicker = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        this.props.counterPlus();
        this.setState({
          countSeconds: this.state.countSeconds + 1,
          intervalId,
        });
      }, 1000);
    }
  };

  stopAutoClicker = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };

  render() {
    return (
      <>
        <button onClick={this.startAutoClicker}>AutoClicker</button>
        <button onClick={this.stopAutoClicker}>StopClicker</button>
      </>
    );
  }
}

export default Autoclickerbutton;
