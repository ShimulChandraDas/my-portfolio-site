import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About';
import Blogs from './Components/Pages/Blogs';
import Home from './Components/Pages/Home/Home';
import Projects from './Components/Pages/Projects';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    < >
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
