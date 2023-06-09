import React from 'react';

// import link
import {useLocation,Link} from 'react-router-dom';

// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  const location = useLocation();
  return(
    <header className='py-6 mb-6 border-b'>
   <div className="container mx-auto flex justify-between items-center">
    {/* logo */}

   <Link to='/'>
      <img src={Logo} alt="" />
    </Link>
    {/* <button> */}
    <div className='flex items-center gap-6'>
    {location.pathname === '/login' ?(<Link className='hover:bg-violet-800 bg-violet-700 text-white py-3 px-4 rounded-lg transition' to='/signup'>
      Sign up
    </Link> ) : (<Link className='hover:text-violet-900 transition' to='/login'>
      Log in
    </Link>)}
    </div>
   </div>
  </header>
  ) 
};

export default Header;
