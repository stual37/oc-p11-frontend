/* eslint-disable no-lone-blocks */
import{useState} from 'react';

import '../css/App.css';

//import SpecialitiesList from '../data/specialities.json';
import Header from './Header.js';
import Search from './Search.js';
import Footer from './Footer.js';
import Login from './Login.js';


const App = () => {
    const [connected, setConnected] = useState(false);    
    
    const Vue = !connected ? (< Login onConnected={setConnected} />) : (<Search />);  
        
    
    return (
        <div>
            <Header />
            <div className='Body'>
                <h1>Medhead POC</h1>    
                    {Vue}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
