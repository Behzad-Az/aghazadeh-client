import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Report from './pages/Report';
import LegalFaq from './pages/LegalFaq';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

interface Props {};

const App: FC<Props> = () : JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/report' element={<Report />} />
      <Route path='/legal-faq' element={<LegalFaq />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default App;
