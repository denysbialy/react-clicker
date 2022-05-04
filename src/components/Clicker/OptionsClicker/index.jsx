const OptionsClicker = (props) => {
  const changeSettings = ({ target: { value } }) => {
    props.changeOptions(value);
  };
  return (
    <>
      <label>
        <input
          type="radio"
          name="options"
          value={false}
          onChange={changeSettings}
        />
        option plus
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value={true}
          onChange={changeSettings}
        />
        option minus
      </label>
    </>
  );
};

export default OptionsClicker;
