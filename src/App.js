import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Flour from './components/Flour';
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
const [useFlour, setUseFlour] = useState(true);

  return (
    <Router>
      <div className="App">      
        <Routes>
          <Route index element={<Home values={values} setValues={setValues} useFlour={useFlour} setUseFlour={setUseFlour} />}  />
          <Route path='flour' element={<Flour values={values} setValues={setValues} />}  />
          <Route path='dough' element={<Dough values={values} setValues={setValues} />}  />
          <Route path='hydration' element={<Hydration values={values} setValues={setValues} useFlour={useFlour}/>}  />
          <Route path='yeast' element={<Yeast values={values} setValues={setValues} />}  />
          <Route path='salt' element={<Salt values={values} setValues={setValues} />}  />
          <Route path='oil' element={<Oil values={values} setValues={setValues} />}  />
          <Route path='results' element={<Results values={values} useFlour={useFlour} />}  />
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
