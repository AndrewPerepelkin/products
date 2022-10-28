
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import Navigation from "./componets/Navigation";



function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
    
  )
};

export default App;
