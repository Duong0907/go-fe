import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { api } from "../../services/axios";

const Reports = () => {
  const [Data, setData] = useState({});
  useEffect(() => {
    const fetchData = () => {
      api
        .get(`/candidates/report`)
        .then((res) => {
          const resData = res.data.data;
          setData(resData);
          console.log(resData);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-between mx-7 my-5">
      <h1 className="font-bold text-2xl py-5">Reports</h1>
      {Object.keys(Data).map((key) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h2>{key.replace("_", " ").toUpperCase()}</h2>
          <PieChart
            series={[
              {
                data: Object.entries(Data[key]).map(([label, value], i) => ({
                  id: i,
                  value,
                  label,
                })),
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default Reports;
