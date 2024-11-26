import MobileDesignLogo from "../../components/MobileDesignLogo/MobileDesignLogo";
import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import "./ProfilePage.css";
import { Arrow, ArrowLeft, User } from "../../constant";
import ProfilePageForm from "../../components/ProfilePageForm/ProfilePageForm";
const ProfilePage = () => {
  return (
    <>
      <div className="profile-page">
        <MobileDesignLogo />
        <OfferAndCart />
        <NavigationBar />
        <div className="arrow-and-profile">
          <div className="arrow-image-profile-page">
            <img src={Arrow} alt="" />
          </div>
          <div className="my-profile">My profile</div>
        </div>

        <div className="arrow-and-profile-mobile">
          <div className="arrow-image-profile-page">
            <img src={ArrowLeft} alt="" />
          </div>
          <div className="your-profile">Your profile</div>
          <button className="edit-button-mobile">Edit</button>
        </div>
        <div className="profile-pic-and-edit-button">
          <div className="profile-pic-and-name">
            <img src={User} alt="" className="profile-pic" />
            <div>Name</div>
          </div>
          <button className="edit-button">Edit</button>
        </div>
        <div className="profile-page-form">
          <div className="name-and-gender">
            <ProfilePageForm label="Full Name" />
            <ProfilePageForm label="Gender" />
          </div>
          <div className="email-and-country">
            <ProfilePageForm label="Email Address" />
            <ProfilePageForm label="Country" />
          </div>
        </div>

        <div className="profile-page-footer">{/* <Footer /> */}</div>
      </div>
    </>
  );
};

export default ProfilePage;
