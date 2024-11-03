import { api } from "../../services/axios";
import React, { useState } from "react";

const SearchScores = () => {
  const [regNum, setRegNum] = useState("");
  const [data, setdata] = useState(null);
  const handleSubmit = () => {
    api
      .get(`/candidates/sbd/${regNum}`)
      .then((res) => {
        const resData = res.data;
        setdata(resData.data);
      })
      .catch((err) => console.log(err));
  };
  const handleChangeInput = (event) => {
    console.log(event.target.value);
    setRegNum(event.target.value);
  };
  return (
    <div className="flex flex-col gap-7 mx-8 mt-10 w-5/6 h-full items-center">
      <div className="flex flex-col bg-slate-50 w-full py-8 pl-10 justify-between rounded-md shadow-xl">
        <h1 className="font-bold text-2xl">User Registration</h1>
        <div className="flex flex-col pt-4">
          <p>Registration Number:</p>
          <div className="flex flex-row items-center">
            <input
              type="text"
              value={regNum}
              onChange={handleChangeInput}
              placeholder="Input your registration number here..."
              className="outline-none border-2 px-5 py-1 rounded-sm w-[30%]"
            />
            <button
              className="bg-black text-white mx-3 px-5 py-2 rounded-sm hover:opacity-90 hover:scale-110 transition-all"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 w-full py-8 pl-10 justify-between rounded-md shadow-xl">
        <h1 className="font-bold text-2xl">Detailed Scores</h1>
        <div className="flex flex-col pt-4">
          {data ? (
            <div className="flex flex-col justify-between">
              <p>Your registration number: {data.sbd}</p>
              <p>Your scores:</p>
              <div>
                <p>Math: {data.toan}</p>
                <p>Literature: {data.ngu_van} </p>
                <p>Foreign Language: {data.ngoai_ngu} </p>
                <p>Physic: {data.vat_li} </p>
                <p>Chemistry: {data.hoa_hoc} </p>
                <p>Biology: {data.sinh_hoc} </p>
                <p>History: {data.lich_su} </p>
                <p>Geography: {data.dia_li} </p>
                <p>Civic Education: {data.gdcd} </p>
              </div>
            </div>
          ) : (
            <p>Detailed view of your scores here!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScores;
