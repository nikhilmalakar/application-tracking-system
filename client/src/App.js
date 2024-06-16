
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Navbar } from './components/Navbar';
import { PostJob } from './Pages/PostJob';

function App() {
  return (
    <div className="App">
      <Routes>
          {/* <h1 className='text-5xl text-green-600 '>Hello</h1> */}
          <Route path='/' element={<Navbar />}> 
            <Route path='/' element={<Home />}/>
            <Route path='/post-job' element={<PostJob />}/>
          </Route>      
      </Routes>
    </div>
  );
}

export default App;
