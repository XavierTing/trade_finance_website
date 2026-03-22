import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import useLenis from './hooks/useLenis';

const App = () => {
  useLenis();

  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;
