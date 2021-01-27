import './App.css';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';
import React, { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <Average />
  );
}

export default App;
