import './App.css';
import Header from './Header';
import Main from './Main';
import About from './About';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Reservations from './Reservations';

function App() {
  return (
    <>
      <Header /><div className="page-container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
      </div>
      <Footer />
      </>
  );
}

export default App;
