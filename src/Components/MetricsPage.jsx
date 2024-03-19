import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../Styles/mainPage.css";

const MetricsPage = () => {
  return (
    <>
      <div className="d-flex flex-column main-mainContainer mt-4 ms-2">
        <div className="ms-3">
          <h6>Company Metrics</h6>
          <div className="d-flex">
            <div className="border border-1 metrics-boxes">
              <div className="values-box-1">$64,492</div>
              <div className="txt-box-box">Total Revenue</div>
            </div>
            <div className="border border-1 metrics-boxes">
              <div className="values-box-2">$608</div>
              <div className="txt-box-box">Total Jobs Avg</div>
            </div>
            <div className="border border-1 metrics-boxes">
              <div className="values-box-2">106</div>
              <div className="txt-box-box">Tickets Created</div>
            </div>
            <div className="border border-1 metrics-boxes">
              <div className="values-box-2">66</div>
              <div className="txt-box-box">Tickets Scheduled</div>
            </div>
          </div>
          <div className="d-flex">
            <div className="border border-1 metrics-boxes">
              <div className="values-box-1">$19304.52</div>
              <div className="txt-box-box">Outstanding Amount</div>
            </div>
            <div className="border border-1 metrics-boxes">
              <div className="values-box-2">0</div>
              <div className="txt-box-box">Memberships Sold</div>
            </div>
            <div className="border border-1 metrics-boxes">
              <div className="values-box-2">8</div>
              <div className="txt-box-box">Jobs Completed</div>
            </div>
            <div className="border border-1 metrics-boxes">
              <div className="values-box-2">2</div>
              <div className="txt-box-box">Total Cancelled</div>
            </div>
          </div>
        </div>

        <div className="d-flex container-div mt-3">
          <div className="ms-3 mt-2 mb-2 container-div-1">
            <h6 className=""> Revenue By Job Location</h6>
            <Bar
              data={{
                labels: [
                  "Social Circle",
                  "Malibu",
                  "Snohomish",
                  "New York",
                  "Everett",
                  "Seattle",
                  "London",
                ],
                datasets: [
                  {
                    label: "Revenue for December 2023",
                    data: [18000, 13000, 6200, 5800, 2400, 2100, 1500],
                    backgroundColor: "#FFCCCB",
                  },
                ],
              }}
              options={{
                indexAxis: "y",
              }}
            />
          </div>

          <div className="ms-4 mt-2 mb-2 container-div-1">
            <h6 className=""> Revenue By Job Type</h6>
            <Bar
              data={{
                labels: [
                  "Alarm system",
                  "Backflow Testing",
                  "Diagnosis",
                  "Fire Extinguisher",
                  "Pump",
                ],
                datasets: [
                  {
                    label: "Revenue for December 2023",
                    data: [30000, 16000, 6200, 5900, 1500],
                    backgroundColor: "#FFCCCB",
                  },
                ],
              }}
              options={{
                indexAxis: "y",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricsPage;
