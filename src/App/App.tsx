import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, FindDogs } from '../pages';
import './App.css';
import { Button } from '../Components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-dogs" element={<FindDogs />} />
      </Routes>

      <footer className="container mx-auto block py-3 text-center bg-blue-300">
        <Button href="/" name="Home" />
        <Button href="/find-dogs" name="Find dogs" />
      </footer>
    </BrowserRouter>
  );
};

export default App;
