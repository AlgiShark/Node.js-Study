import './App.css';
import Counter from './Counter';
import Info from './Info';
import React, { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <Info />
  );
}

export default App;
