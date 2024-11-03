import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const menu = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/search",
      label: "Search Scores",
    },
    {
      href: "/report",
      label: "Reports",
    },
    {
      href: "/setting",
      label: "Settings",
    },
  ];
  const location = useLocation();
  return (
    <div className="flex flex-col w-1/6 h-screen bg-gradient-to-b from-amber-300 to-lime-600 gap-5 pl-7 pt-5">
      <p className="font-bold text-3xl">Menu</p>
      <div className="flex flex-col h-1/5 justify-between">
        {menu.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              to={item.href}
              key={item.href}
              onClick={() => {
                console.log(location.pathname);
              }}
              className={`text-black hover:cursor-pointer hover:text-xl transition-all ${
                isActive ? "text-xl font-bold" : ""
              }`}
            >
              <p>{item.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
