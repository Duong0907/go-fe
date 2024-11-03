import React, { useEffect, useState } from "react";
import { api } from "../../services/axios";

const Dashboard = () => {
  const [Data, setData] = useState({});
  useEffect(() => {
    const fetchData = () => {
      api
        .get(`/candidates/top?group=A`)
        .then((res) => {
          const resData = res.data.data.candidates;
          setData(resData);
          console.log(resData);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-between mx-7 my-5 w-full">
      <h1 className="font-bold text-2xl py-5">Top 10 Group A</h1>
      <div className="flex flex-col justify-between gap-5">
        {Object.keys(Data).map((key) => (
          <div className="bg-slate-300 shadow-xl w-full p-5 rounded-md">
            <p className="font-bold">Top {parseInt(key) + 1}:</p>
            <p>Registration number: {Data[key].sbd}</p>
            <p>Total point: {Data[key].total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
