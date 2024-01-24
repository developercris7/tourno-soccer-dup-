import { Routes , Route } from 'react-router-dom';
import './App.css';
import Intro from './Components/Home/Intro/Intro';
import Home from './Components/Home/Home/Home';
import Signup from './Components/Home/Signup/Signup';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
