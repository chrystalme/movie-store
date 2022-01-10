import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <div className="bg-green-200">
    <div className="flex justify-between items-center py-8 px-4">
      <Link className="font-bold text-indigo-400" to="/"><div>Movie App</div></Link>
      <div className="text-center text-indigo-400"><FaUser /></div>

    </div>
  </div>
);

export default Header;
