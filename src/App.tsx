import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Report from './pages/Report';

interface Props {};

const App: FC<Props> = () : JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/report' element={<Report />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default App;
