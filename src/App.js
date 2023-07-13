
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import FirstPage from './FirstPage';
import SecondPage from './Secondpage';
import About from './Pages/About-us';
import Blog from './Pages/blog';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Help from './Pages/help';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/feature" element={<Features/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/help" element={<Help/>}/>
        </Routes>

        <FirstPage/>
        <SecondPage/>
    </div>
    </BrowserRouter>

  );
}

export default App;
