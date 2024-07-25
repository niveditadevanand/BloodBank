import React from 'react';
import Landing from './components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Userview from './components/Userview';
import Requestform from './components/Requestform';
import Donoradd from './components/Donoradd';
import Loginas from './components/Loginas';
import Adminview from './components/Adminview';
import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/uview" element={<Userview />} />
          <Route path="/req" element={<Requestform />} />
          <Route path="/donoradd" element={<Donoradd />} />
          <Route path="/loginas" element={<Loginas />} />
          <Route path="/aview" element={<Adminview />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
