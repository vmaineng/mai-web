import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#EAE6DF] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Mai Vang - SWE</span>
        <p className="text-slate-200">&copy;{new Date().getFullYear()}. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
