import React from "react";

function Footer() {
  return (
    <div className="bg-base-100 text-primary flex flex-col sm:flex-row justify-between flex-wrap px-4 sm:px-10 py-10">
      <a className="btn btn-ghost text-xl font-bold">ASTRO POTD</a>
      <div className="flex flex-col justify-start items-center sm:items-start">
        <a>GitHub</a>
        <a>Linkedin</a>
      </div>
      <footer className="footer footer-center text-primary">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
