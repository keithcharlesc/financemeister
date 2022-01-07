import Piechart from "./Piechart";
import "./DashboardCard.css";
import Daterange from "./Daterange";

export const DashboardCardPiechart = ({ data }) => {
  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <div className="flex justify-center"> <Daterange /> </div>
        <h2 className="dashboardcard-header">Expenses</h2>
        <div className="dashboardcard-subheader">Categories</div>
      </div>
      <Piechart></Piechart>
    </div>
  );
};
