import{useState} from 'react';

//import SpecialitiesList from '../data/specialities.json';
import Specialities from './Specialities.js';
import Hospital from './Hospital.js'; 


const Search = () => {
    const [validated, setValidated] = useState(false);
    const [selection, setSelection] = useState({});
    
    //console.log(selection);
    
// Selon si le premier formulaire est valide avec le choix de la spécialités, nous affichons ce dit formulaire ou un tableau avec les hôpitaux disponibles
    const vue = !validated ? (<Specialities validated={validated} onValidated={setValidated} onSelection={setSelection} />) : ( <Hospital selection={selection} onSelection={setSelection} onValidated={setValidated}/>);

    return (
        <div>
            {vue}
        </div>
    );
}

export default Search;