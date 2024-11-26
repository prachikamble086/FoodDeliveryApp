import "./AppStatistics.css";
const AppStatistics = ({ number, info }) => {
  return (
    <>
      <div className="app-data">
        <div className="app-data-number">{number}+</div>
        <div className="app-data-info">{info}</div>
      </div>
    </>
  );
};

export default AppStatistics;
