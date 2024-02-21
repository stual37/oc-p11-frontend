/* eslint-disable no-lone-blocks */
import{useEffect, useState} from 'react';

import '../css/App.css';

//import SpecialitiesList from '../data/specialities.json';
import Header from './Header.js';
import Search from './Search.js';
import Footer from './Footer.js';
import Login from './Login.js';
import Fetch from './Fetch.js';


const App = () => {
    const [connected, setConnected] = useState(false);    
    const [errorMessages, setErrorMessages] = useState();
    const [asError, setASMessages] = useState(false);

    /*
    useEffect(() => {
        const url = 'login';
        Fetch(url, 'POST').then((data) => setToken(data)).catch((error) => setErrorMessages(error));

    }, []);
*/
//    console.log(token);
//    console.log(asError);

    const Vue = !connected ? (< Login onConnected={setConnected} />) : (<Search />);  
        
    
    return (
        <div>
            <Header />
            <div className='Body'>
                <h1>Medhead POC</h1>
                {!errorMessages ? 
                        Vue
                : 
                    <div>
                        errorMessages
                    </div>
                
                }
            </div>
            <Footer/>
        </div>
    );
}

export default App;
