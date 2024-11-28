import "./InputAndLabel.css";

const InputAndLabel = ({ inputLabel, placeholder, value, onChange }) => {
  return (
    <div className="input-label">
      <label>{inputLabel}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="input-form"
        value={value} // Use the value prop for the input field
        onChange={onChange} // Use the onChange prop for handling input changes
      />
    </div>
  );
};

export default InputAndLabel;
