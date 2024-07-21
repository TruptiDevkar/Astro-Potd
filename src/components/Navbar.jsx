import React from "react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar bg-base-100 px-4 sm:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a>Links</a>
              <ul className="p-2">
                <li>
                  <a href="https://api.nasa.gov/" target="_blank">API Docs</a>
                </li>
                <li>
                  <a href="mailto:truptidevkar2017@gmail.com" target="_blank">Reach out</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a  href="/"  className="btn btn-ghost text-xl font-bold">ASTRO POTD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <details>
              <summary>Links</summary>
              <ul className="p-2">
                <li>
                  <a href="https://api.nasa.gov/" target="_blank">API Docs</a>
                </li>
                <li>
                  <a  href="mailto:truptidevkar2017@gmail.com" target="_blank">Reach out</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className=" text-2xl "> <FaGithub /></a>
      </div>
    </div>
  );
}

export default Navbar;
