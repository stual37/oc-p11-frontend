import {Button, Form, FormGroup, Spinner} from 'react-bootstrap';
import{useState, useEffect} from 'react';
import '../css/Specialities.css';

/**
 * 
 * @param {*} param0 
 * @returns 
 */


const Specialities = ({onUpdate}) => {
    //console.log(specialities);
    const [validated, setValidated] = useState(false);
    const [specialities, setSpecialities] = useState(null);
    const [messages, setMessage] = useState('');

    const url = "http://localhost:9000/specialities";

    useEffect(() => {
        // Nous récupérons la liste des spécialités
        fetch(url, {
            method: 'get',
            mode: 'cors',  
            site: 'cross-site',
            'cache' : 'no-cache',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
                'Access-Control-Allow-Headers' : 'Accept, Content-Type, origin',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'no-cors'
            },
        })
        .then((response) => {   
            if (!response.ok) {
                throw new Error('Network response was not ok');
            } 
            return response.json();
        })
        .then((data) => {
            // Nous sauvegardons les données récupérées au format JSON sous forme de tableau
            setSpecialities(data);
        })
        .catch(error => {
            setMessage(error);
        });
    }, []);

    const handleSubmit = (event) => {        
        const form = event.target;
        if (form.checkValidity() === false || form.speciality === '0') {
            event.preventDefault();
            event.stopPropagation();
        }
        else if(form.speciality !== '0'){
            setValidated(true);
            // Nous récupérons l'id de la spécialités sélectionnée
            //setSpeciality(form.speciality.value);
            onUpdate(true, form.speciality.value);
        }
        else {
            setValidated(false);
        }
    };

    
    return(
        <div>
            <h2>Veuillez fournir votre ville et la spécialité que vous recherchez</h2>
                    { specialities == null ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden" id="loading">Loading...</span>
                        </Spinner>
                    :
                        <Form noValidate validated={validated} onSubmit={handleSubmit} id="form" className="col justify-center">
                                <FormGroup className="mb-3 col" controlId='speciality'>
                                    <Form.Label >Spécialité désirée</Form.Label>
                                    <Form.Select className="col-12" id="speciality">
                                        <option key="0" value="0" id="0" > </option>
                                    {  specialities.map((speciality) => 
                                        <option key={speciality.id} value={speciality.id} id={speciality.id}>{speciality.name}</option>
                                    ) }
                                    </Form.Select>
                                    <Form.Control.Feedback>Veuillez choisir une spécialité</Form.Control.Feedback>
                                </FormGroup>
                            <Button type="submit" className="col-md-6 col-sm-6 text btn-primary" >Envoyer</Button>
                        </Form>
                    }
        </div>
        
    )
}

export default Specialities;