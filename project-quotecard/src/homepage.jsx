import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import laptop from './assets/laptop.jpg'
function Homepage() {
    return(
    <div style={{display:'flex', marginTop:'150px',marginLeft:'100px'}}>
        <div>
            <img src={laptop} alt="" style={{borderRadius:'50%', width:" 300px", height:'300px'}}/>
        </div>
        <div>
            <div className="information" style={{marginLeft:'100px'}}>
                  <h1>Hi , I'm Bonu 🖐️</h1>
                 <h2>I'm a student at school </h2>
            </div>
            <div className="images" style={{textAlign:"left"}}>
                <ul className="info">
                    <li style={{listStyleType:'none'}}>☕ fueled by coffee</li>
                    <li style={{listStyleType:'none'}}>🌍 based in the Uzbekistan</li>
                    <li style={{listStyleType:'none'}}>💼 student at school</li>
                    <li style={{listStyleType:'none'}}>📧 bonuyakubboyeva@gmail.com</li>
                </ul>
            </div>
            <div>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-x-twitter"></i>
            </div>
        </div>
    </div> 

    )
}
export default Homepage ;