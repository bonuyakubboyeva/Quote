import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Homepage from './homepage';
import Information from './information';
import QuoteApp from './quoteapp';
import Contact from './porfolio';
const Home = () => <h2>Bosh sahifa</h2>;
const About = () => <h2>About me </h2>;
const Aloqa = () => <h2>Aloqa bo'limi</h2>;

function App() {
  return (
    <BrowserRouter> 
    <nav style={{padding:'20px', background:'#eee'}}>
      {/* <Link to="/" style={{marginRight:'10px'}}>Bosh sahifa</Link>  */}
      <Link to="/homepage" style={{marginRight:'10px'}}>Home</Link>
      {/* <Link to="/about" style={{marginRight:'10px'}}>About me</Link> */}
      <Link to="/information" style={{marginRight:"10px"}}> Information </Link>
      <Link to="/quotecard" style={{marginRight:'10px'}}>Quote</Link>
      <Link to="/contact" style={{marginRight:'10px'}}>Contact</Link>

      
    </nav>
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/contact' element={<Contact/>} />
        <Route path='/homepage' element={<  Homepage/>}/>
        <Route path='/information' element={< Information />}/>
        <Route path='/quotecard' element={<QuoteApp />}/> 
        <Route path='/contact' element={<Contact  />}/> 
        </Routes>
    </div>
    </BrowserRouter> 
    
    
  );
}
export default App;
