import React from "react";
import OptionsClicker from "./OptionsClicker";
import SettingsStepCounter from "./SettingsStepCounter";
import Autoclickerbutton from "./AutoClickerButton/AutoClickerButton";

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      stepCounter: 1,
      settingsOptions: "false",
    };
  }

  counterPlus = () => {
    const { settingsOptions } = this.state;
    this.setState((newState) => ({
      counter:
        settingsOptions === "false"
          ? newState.counter + newState.stepCounter
          : newState.counter - newState.stepCounter,
    }));
  };

  addStep = (stepCounter) => {
    this.setState({ stepCounter });
  };
  changeOptions = (settingsOptions) => {
    this.setState({ settingsOptions });
  };

  render() {
    const { counter, stepCounter, settingsOptions } = this.state;
    const styles = {
      width: "500px",
      margin: "0 auto",
    };
    const styleCounter = {
      color: settingsOptions === 'true'? 'red' : 'green'
    }

    return (
      <div style={styles}>
        <h1 style={styleCounter}>{counter}</h1>
        <h2>
          Шаг: {settingsOptions === "true" ? "-" : ""}
          {stepCounter}
        </h2>
        <button onClick={this.counterPlus}>Send</button>
        <SettingsStepCounter addStep={this.addStep} />
        <OptionsClicker changeOptions={this.changeOptions} />
        <Autoclickerbutton counterPlus={this.counterPlus} />
      </div>
    );
  }
}

export default Clicker;
