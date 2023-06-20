import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home, FindDogs } from '../pages';

import { Footer } from '../Components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-dogs" element={<FindDogs />} />
      </Routes>
      <Footer />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
