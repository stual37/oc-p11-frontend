/* eslint-disable no-lone-blocks */
import{useState} from 'react';

import '../css/App.css';

//import SpecialitiesList from '../data/specialities.json';
import Header from './Header.js';
import Specialities from './Specialities.js';
import Hospital from './Hospital.js'; 
import Footer from './Footer.js';



const App = () => {
    const [validated, setValidated] = useState(false);
    const [selection, setSelection] = useState({});
    
    // Remonter l'id a renvoyer ensuite à l'enfant Hospital, ain si que si le choix de la spécialité a été validé
    const onUpdate = (validated, choice) => {
        console.log(" se lance depuis App.js");
        console.log(choice);
    
        setValidated(validated);
        setSelection(choice);
    }
       
    console.log(selection);

    
    
// Selon si le premier formulaire est valide avec le choix de la spécialités, nous affichons ce dit formulaire ou un tableau avec les hôpitaux disponibles
    const vue = !validated ? (<Specialities validated={validated} onValidated={setValidated} onSelection={setSelection} />) : ( <Hospital selection={selection} onSelection={setSelection} onValidated={setValidated}/>);

    return (
        <div>
            <Header />
            <div className='Body'>
                <h1>Medhead POC</h1>
                    {vue}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
