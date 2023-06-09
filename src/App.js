import React from 'react';

// import Routes and route
import {Routes, Route} from 'react-router-dom';

// import Components
import Header from './components/Header';
import Footer from './components/Footer';

// import Pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return <div className='max-w-[1440px] mx-auto bg-white'>
    <Header />
    <Routes>

      <Route path='/' element={<Home />}  />
      <Route path='/property/:id' element={<PropertyDetails />}  />
      
        
      
      <Route path='/login' element={<Login />}  />
      <Route path='/signup' element={<Signup />}  />
    </Routes>
    <Footer />
    </div>;
};

export default App;
