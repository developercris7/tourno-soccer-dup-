import { Routes , Route } from 'react-router-dom';
import './App.css';
import Intro from './Components/Home/Intro/Intro';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/home' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
