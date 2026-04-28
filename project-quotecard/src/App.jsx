import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Homepage from './homepage';
import Information from './information';
import QuoteApp from './quoteapp';
import Contact from './porfolio';
import Card from './project';
const Home = () => <h2>Bosh sahifa</h2>;
const About = () => <h2>About me </h2>;
const Aloqa = () => <h2>Aloqa bo'limi</h2>;

function App() {
  return (
    <BrowserRouter> 
    <nav style={{padding:'20px', background:'#eee'}}>
      <Link to="/homepage" style={{marginRight:'10px'}}>Home</Link>  
      <Link to="/information" style={{marginRight:"10px"}}> Information </Link>
      <Link to="/quotecard" style={{marginRight:'10px'}}>Quote</Link>
      <Link to="/contact" style={{marginRight:'10px'}}>Contact</Link>
      <Link to="/project" style={{marginRight:'10px'}}>My first project</Link>
    </nav>


    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/homepage' element={<  Homepage/>}/>
        <Route path='/information' element={< Information />}/>
        <Route path='/quotecard' element={<QuoteApp />}/> 
        <Route path='/contact' element={<Contact  />}/> 
        <Route path='/project' element={   <Card
        bankname='AloqaBank'
        cardname='1234 5678 9012 3456'
        data='12/34'
        cardholder='Bonu Yakubboeva'
        />}/> 
      </Routes>
    </div>
    </BrowserRouter> 
    
  )
}
export default App;
