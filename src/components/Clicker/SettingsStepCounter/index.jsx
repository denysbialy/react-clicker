import PropTypes from "prop-types";

const SettingsStepCounter = (props) => {
  const changeValue = ({ target: { value } }) => {
    props.addStep(Number(value));
  };
  return <input type="text" onChange={changeValue} placeholder="counter" />;
};

export default SettingsStepCounter;

SettingsStepCounter.propTypes = {
  addStep: PropTypes.func.isRequired,
};
