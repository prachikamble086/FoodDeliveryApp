import { PartnerWithUsImage } from "../../constant";
import { SingupRiderImage } from "../../constant";
import GetStarted from "../../components/GetStarted/GetStarted";
import "./JoinApp.css";
const JoinApp = () => {
  return (
    <>
      <div className="join-app">
        <GetStarted
          signupWithUsImage={SingupRiderImage}
          header="Earn more with lower fees"
          method="Sign up as business"
          selection="Partner with us"
        />
        <GetStarted
          signupWithUsImage={PartnerWithUsImage}
          header="Avail exclusive perks"
          method="Sign up as rider"
          selection="Ride with us"
        />
      </div>
    </>
  );
};

export default JoinApp;
