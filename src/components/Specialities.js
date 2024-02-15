import {Button, Spinner} from 'react-bootstrap';
import{useState, useEffect} from 'react';
import {FormOption} from './FormOption.js';

import Fetch from './Fetch.js';
import '../css/Specialities.css';


const Specialities = ({validated, onValidated, onSelection}) => {
    //console.log(specialities);
    //const [validated, setValidated] = useState(false);
    const [specialities, setSpecialities] = useState(null);
    const [cities, setCities] = useState(null);
    //const [messages, setMessage] = useState('');

    const urlSpeciality = "http://localhost:9000/specialities";
    const urlCity = "http://localhost:9000/cities";
    useEffect(() => {
        Fetch(urlSpeciality, 'GET').then((data) => {
            //console.log(data);
            setSpecialities(data);
        });
        
        Fetch(urlCity, 'GET').then((data) => {
            //console.log(data);
            setCities(data);
        });
        
    }, []);

    //console.log(cities);
    
    const handleSubmit = (event) => {        
        event.preventDefault();
        event.stopPropagation();
        const form = event.target;
        
        if (form.validated === "false" || form.speciality.value === 'speciality_0' || form.city.value === 'city_0') {
            validated = "false";
        }
        else {
            const choice = {speciality: form.speciality.value, city: form.city.value};
            //console.log(choice);
            onSelection(choice);
            onValidated(true);
            // Nous récupérons l'id de la spécialités sélectionnée
        }
        
    };

    
    return(
        <div>
            <h2>Veuillez fournir votre ville et la spécialité que vous recherchez</h2>
                    { (specialities == null || cities== null)?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden" id="loading">Loading...</span>
                        </Spinner>
                    :
                        <div className="container col text-center">
                            <form onSubmit={(e) =>handleSubmit(e)} id="form" className="col justify-center">
                                <div className="mb-3 col">
                                    
                                    <FormOption 
                                        label = "Quelle est la ville la plus proche de chez vous?"
                                        id = "city"
                                        placholder = "Veuillez choisir une ville"
                                        object = {cities}
                                        defaut = "city_0"
                                    />
                                    <FormOption 
                                        label = "Spécialité désirée"
                                        id = "speciality"
                                        placholder = "Veuillez choisir une spécialité"
                                        object = {specialities}
                                        defaut = "speciality_0"
                                    />
                                </div>
                                <Button type="submit" className="col-md-6 col-sm-6 text btn-primary" id='button'>Envoyer</Button>
                            </form>
                        </div>
                        
                    }
        </div>
        
    )
}

export default Specialities;