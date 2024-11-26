import AppStatistics from "../../components/AppStatistics/AppStatistics";
import "./NumberInfo.css";

const NumberInfo = () => {
  return (
    <>
      <div className="app-statistics">
        <AppStatistics number="546" info="Registered Riders" />
        <AppStatistics number="789,900" info="Orders Delivered" />
        <AppStatistics number="690" info="Restaurants Partnered" />
        <AppStatistics number="17,457" info="Food items" />
      </div>
    </>
  );
};

export default NumberInfo;
