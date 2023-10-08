import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link,useLocation} from 'react-router-dom';
import Home from './components/home.js'
import About from './components/about'
import Contact from './components/contact'
import GetUrl from './components/url';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li ><Link to="/contact">contact</Link></li>
      </ul>
      <GetUrl/>
      
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
