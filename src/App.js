import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About';
import Blogs from './Components/Pages/Blogs';
import Footer from './Components/Pages/Footer';
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
      <Footer />
    </>
  );
}

export default App;
