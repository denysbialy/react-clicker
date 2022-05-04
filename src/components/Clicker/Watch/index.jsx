import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      intervalId: null,
    };
    this.isRendered = false;
  }

  componentDidMount() {
    if (this.isRendered) {
      return;
    }
    this.isRendered = true;
    // console.log('mount');
    if (!this.state.intervalId) {
      this.start();
    }
  }

  componentDidUpdate() {
    // console.log('update');
  }

  componentWillUnmount() {
    // console.log('unmount');
    this.stop();
  }

  start = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
          intervalId,
        });
      }, 1000);
    }
  };

  stop = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };

  reset = () => {
    this.stop();
    this.setState({ time: 0 });
  };

  render() {
    const { time } = this.state;
    return (
      <article>
        <h1>{time}</h1>
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </article>
    );
  }
}

export default StopWatch;