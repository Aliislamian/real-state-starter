import React from 'react';

// import link
import {Link} from 'react-router-dom';

// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return(
    <header className='py-6 mb-6 border-b'>
   <div className="container mx-auto flex justify-between items-center">
    {/* logo */}

   <Link to='/'>
      <img src={Logo} alt="" />
    </Link>

    {/* <button> */}

    <div className='flex items-center gap-6'>
    <Link className='hover:text-violet-900 transition' to=''>
      Log in
    </Link>
    <Link className='hover:bg-violet-800 bg-violet-700 text-white py-3 px-4 rounded-lg transition' to=''>
      Sign up
    </Link>
    
    </div>
   </div>
  </header>
  ) 
};

export default Header;
