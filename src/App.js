import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Router from './router/Router';
import CardContextProvider from './context/CardContext'

function App() {
  return (
  
    <>
    <CardContextProvider>

      <Router />
    </CardContextProvider>
    </>
 
  );
}

export default App;
