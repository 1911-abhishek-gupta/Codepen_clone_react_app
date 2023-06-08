import React from 'react';

import HomePage from './components/HomePage';

import DataProvider from './context/DataProvider';


function App() {
  return (
    <DataProvider>
    <HomePage/>
   </DataProvider>
  
  );
}

export default App;
