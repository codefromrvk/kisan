import React from "react";

const SubMenu = () => {
  return (
    <div className="w-[250px] border-2 ml-2 my-8  rounded ">
      <span className="font-bold text-lg text-center block p-2">Submenu</span>
      <ul className=" text-[#19bdb2]  text-sm py-4 cursor-pointer">
        <li className="pl-4 py-1 font-semibold">Home</li>
        <li className="pl-4 py-1 font-semibold bg-[#19bdb2] text-white">
          Examples
        </li>
        <li className="pl-4 py-1 font-semibold">Contact</li>
        <li className="pl-4 py-1 font-semibold">About</li>
      </ul>
    </div>
  );
};

export default SubMenu;
