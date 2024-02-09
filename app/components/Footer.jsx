import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12">
        <span>Logo</span>
        <p>&copy;{new Date().getFullYear()}. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
