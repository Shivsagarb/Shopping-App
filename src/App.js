import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import CartPage from './page/CartPage';


function App() {
  return (
    <div className='min-h-screen'>
      <div className='py-3 px-5 bg-sky-900 h-fit'>
        <NavBar/>
      </div>
      <div className=''>
        <Routes>
          <Route path= '/Shopping-App/' element={<HomePage/>} />
          <Route path= '/Shopping-App/cart' element={<CartPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
