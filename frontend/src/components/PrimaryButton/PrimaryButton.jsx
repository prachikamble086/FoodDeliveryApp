import "./PrimaryButton.css";

const PrimaryButton = ({ primaryButton, buttonContent, ...props }) => {
  return (
    <div>
      <button
        type="button"
        onClick={primaryButton}
        {...props}
        className="primary-button"
      >
        {buttonContent}
      </button>
    </div>
  );
};

export default PrimaryButton;
