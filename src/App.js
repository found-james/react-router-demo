import {Routes, Route} from 'react-router-dom'
import './App.css';

import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Dashboard from './pages/Dashboard.js';
import Stock from './components/Stock.js';
import { stocks } from './data.js';


function App() {
  return (
    <>
    <Nav />
    <section>
      <Routes>
        <Route path='/' element= { <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/stocks' element={ <Dashboard stockData = { stocks } /> } />
        <Route path='/stock/:symbol' element= {<Stock stockData ={ stocks } /> } />
      </Routes>
    </section>
    </>
  );
}

export default App;
