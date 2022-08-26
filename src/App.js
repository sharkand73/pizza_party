import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dough from './components/Dough';
import Hydration from './components/Hydration';
import Yeast from './components/Yeast';
import Salt from './components/Salt';
import Oil from './components/Oil';
import Results from './components/Results';

import { defaultValues } from './supporting-code/Settings';
import './App.css';

function App() {

const [values, setValues] = useState(defaultValues);

  return (
    <Router>
      <div className="App">      
        <Routes>
          <Route index element={<Home />}  />
          <Route path='dough' element={<Dough />}  />
          <Route path='hydration' element={<Hydration />}  />
          <Route path='yeast' element={<Yeast />}  />
          <Route path='salt' element={<Salt />}  />
          <Route path='oil' element={<Oil />}  />
          <Route path='results' element={<Results />}  />
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
