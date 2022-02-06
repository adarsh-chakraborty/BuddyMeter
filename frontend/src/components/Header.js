import React from 'react';

const Header = () => {
  return (
    <header className="h-fit p-2 flex justify-around bg-[#364958] text-gray-100 text-lg shadow-md">
      <div>
        <span className="px-4">Buddy Meter</span>
      </div>
      <ul className="flex gap-4 mx-4">
        <li>Home</li>
        <li>Create Account</li>
      </ul>
    </header>
  );
};

export default Header;
