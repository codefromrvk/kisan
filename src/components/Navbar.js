import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import brand from "../assets/brand.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const activeClassName =
    "px-2 bg-black border-b-2 border-[#3cddd4] flex items-center";
  return (
    <>
      <nav className="flex flex-row  justify-around bg-[#29363d]  text-[#6e848b] font-bold text-sm tracking-[0.15rem]  ">
        <div>
          <img src={brand} alt="Brand" />
        </div>
        <div className="md:flex md:flex-row hidden ">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/dapibus"
          >
            DAPIBUS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/ultricles"
          >
            ULTRICIES
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/bibendum"
          >
            BIBENDUM
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/magna"
          >
            MAGNA
          </NavLink>
        </div>
        <div
          className="md:hidden my-auto"
          onClick={() => {
            console.log(navState);
            setNavState((prev) => !prev);
          }}
          style={{ cursor: "pointer" }}
        >
          {navState ? "X" : <GiHamburgerMenu size="2rem" />}
        </div>

        {/* <div>

      </div> */}
      </nav>
      {navState && (
        <div className=" flex flex-col items-center md:hidden text-[#6e848b] bg-[#29363d] border-t-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/dapibus"
          >
            DAPIBUS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/ultricles"
          >
            ULTRICIES
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/bibendum"
          >
            BIBENDUM
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "px-2 flex items-center"
            }
            to="/magna"
          >
            MAGNA
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
