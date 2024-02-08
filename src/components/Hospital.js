import{useState, useEffect} from 'react';
import {Button, Spinner, Table} from 'react-bootstrap';
import '../css/Hospital.css';


/**
 * 
 * @param {*} param0 
 * @returns 
 */
const Hospital = ({speciality}) => {
    const[hospitals, setHospitals] = useState([]);
    const[messages, setMessage] = useState(null);
    
    // Nous lançons une réquête http sur le serveur API avec les paramêtres contenant la ville et l'id de la spécialités demandée
    useEffect(() => {
        const url = "http://localhost:9000/speciality/" + speciality;
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
            setHospitals(data);
        })
        .catch(error => {
            setMessage(error);
        });
    }, []);
    
    //console.log(hospitals);
    const handleMessage = (hospital) => {
        console.log(hospital.hospital.id);
        // URL qui va servir à mettre à jour la table hospital
        alert("Un lit vient de vous êtes réservé dans l'hôpital : " );
        const url = "http://localhost:9000/hospital/reserve-bed/" + hospital.hospital.id;
        fetch(url, {
            method: 'PUT',
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
            // Nous mettons à jour les données sous forme de tableau
            let newHospitals = [] ;
            console.log(data);
            console.log(hospitals);
            hospitals.map((hospital) => {
                console.log(hospital);
                if(hospital.id === data.id) {
                    newHospitals.push(data);
                }
                else {
                    newHospitals.push(hospital)
                }
            });
            console.log(newHospitals);
            //Nous mettons à jour le tableau des hôpitaux
            setHospitals(newHospitals);
        })
        .catch(error => {
            setMessage(error);
        });
    }
    
    return (
        <div className="Page">
            <h2> Liste des hôpitaux disponibles :</h2>
            {hospitals == null ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden" id="loading">Loading...</span>
                </Spinner>
            :
                <Table className='table-hospital' role="table">
                    <thead >
                        <tr role="row">
                            <th key="name" role="columnheader">Nom</th>
                            <th key="vity" role="columnheader">Ville</th>
                            <th key="bed" ole="columnheader">Nb lits disponible</th>
                            <th key="reserve" role="columnheader"></th>
                        </tr>
                    </thead>
                    <tbody >
                        { hospitals.map((hospital) => 
                            <tr role="row">
                                <td id="hn" role="cell">{hospital.name}</td>
                                <td id="hc" role="cell">{hospital.city}</td>
                                <td id="hba" role="cell">{hospital.bedAvailable}</td>
                                <td><Button type="submit" onClick={() =>handleMessage({hospital})} className="btn-primary">Réserver</Button></td>
                            </tr>
                        )}     
                    </tbody>
                </Table>
            }
        </div>
    );
}



export default Hospital;