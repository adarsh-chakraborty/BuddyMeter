import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="h-fit p-2 flex justify-around bg-[#364958] text-gray-100 text-lg shadow-md">
      <Link to="/">
        <span className="px-4">Buddy Meter</span>
      </Link>
      <ul className="flex gap-4 mx-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Create Account</li>
      </ul>
    </header>
  );
};

export default Header;
