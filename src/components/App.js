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
    const [idSpeciality, setIdSpeciality] = useState(0);
    
    // Remonter l'id a renvoyer ensuite à l'enfant Hospital, ain si que si le choix de la spécialité a été validé
    const onUpdate = (validated, idSPeciality) => {
        console.log(" se lance depuis App.js");
        console.log(idSPeciality);
        setValidated(validated);
        setIdSpeciality(idSPeciality);
    }
       
    

    
    
// Selon si le premier formulaire est valide avec le choix de la spécialités, nous affichons ce dit formulaire ou un tableau avec les hôpitaux disponibles
    const vue = !validated ? (<Specialities onUpdate={onUpdate} />) : ( <Hospital speciality={idSpeciality} onUpdate={onUpdate}  />);

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
