
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
          {/* <h1 className='text-5xl text-green-600 '>Hello</h1> */}
          <Route path='/' element={<div><h2>Navbar</h2><Outlet /></div>}> 
            <Route path='/' element={<Home />}/>
          </Route>      
      </Routes>
    </div>
  );
}

export default App;
