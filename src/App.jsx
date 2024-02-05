import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BMI } from './pages/BMI';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='main-container'>
      <BMI />
    </div>
  );
}

export default App;
