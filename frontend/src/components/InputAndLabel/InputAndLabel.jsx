import "./InputAndLabel.css";

const InputAndLabel = ({ inputLabel, placeholder, value, onChange }) => {
  return (
    <div className="input-label">
      <label>{inputLabel}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="input-form"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputAndLabel;
