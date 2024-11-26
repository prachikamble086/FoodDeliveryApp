import "./ProfilePageForm.css";
const ProfilePageForm = ({ label }) => {
  return (
    <>
      <div className="profile-page-form-label">
        <label className="profile-page-label">{label}</label>
        <input type="text" className="profile-page-input" />
      </div>
    </>
  );
};

export default ProfilePageForm;
