import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-auto ">
      <div className="bg-blue-700 w-full h-full py-5 flex items-center justify-center">
        <h1 className="text-5xl text-white font-bold">G-Scores</h1>
      </div>
      <div className="flex flex-row h-full">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
