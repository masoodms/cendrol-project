import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between py-5 px-10 bg-yellow">
      <div>
        <li className="font-bold text-2xl uppercase">cendrol</li>
      </div>
      <div className="flex gap-4">
        <li>About</li>
        <li>Contact</li>
        <li>Career</li>
      </div>
    </div>
  );
};

export default Header;
