const InputAndLabel = (props) => {
  const { inputLabel, placeholder } = props;
  return (
    <>
      <div className="input-label">
        <label>{inputLabel}</label>
        <input type="text" placeholder={placeholder} />
      </div>
    </>
  );
};

export default InputAndLabel;
