import React from 'react';

const Header = () => {
  return (
    <header className="h-9 flex justify-between bg-[#365958]">
      <div>
        <span>Buddy Meter</span>
      </div>
      <ul className="flex gap-4 mx-4">
        <li>Home</li>
        <li>Create Account</li>
      </ul>
    </header>
  );
};

export default Header;
