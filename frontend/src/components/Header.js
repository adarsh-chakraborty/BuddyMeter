import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-fit p-4 flex justify-between items-center bg-gray-800 text-white text-lg shadow-md">
      <Link to="/" className="text-2xl font-bold ml-8">
        Buddy Meter
      </Link>
      <nav className='mr-8'>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <a className='hover:text-gray-300' href='https://github.com/adarsh-chakraborty/BuddyMeter' rel='noreferrer' target='_blank'>GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
