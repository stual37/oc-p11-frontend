import{useState, useEffect} from 'react';
import {Button, Spinner, Table} from 'react-bootstrap';

import Fetch from './Fetch.js';
import '../css/Hospital.css';

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const Hospital = ({selection, onSelection, onValidated}) => {
    const[hospitals, setHospitals] = useState([]);
    //const[messages, setMessage] = useState(null); 
    // Nous lançons une réquête http sur le serveur API avec les paramêtres contenant la ville et l'id de la spécialités demandée
    //console.log(onUpdate);
    //console.log(selection);

    useEffect(() => {
        const url = "speciality?id=" + selection.speciality + "&city=" + selection.city ;
    //    console.log(url);
        Fetch(url, 'GET').then((data)=> {
            setHospitals(data);
        });

    }, [selection]);

    //console.log(hospitals);
    //console.log(hospitals);
    const handleMessage = (e, hospital) => {
        //console.log(e.target);
        //console.log("Hôpital choisi : " + JSON.stringify(hospital));
        //console.log(hospital);
        // URL qui va servir à mettre à jour la table hospital
        alert("Un lit vient de vous êtes réservé dans l'hôpital : " + hospital.name);
        
        const url = "hospital/reserve-bed/" + hospital.id;
        Fetch(url, 'PUT').then((data)=> {
            let newHospitals = [] ;
            //console.log(data);
            //console.log(hospitals);
            let res = hospitals.map((hospital) => {
                //console.log(hospital);
                if(hospital.id === data.id) {
                    newHospitals.push(data);
                }
                else {
                    newHospitals.push(hospital)
                }
            });
            //console.log(newHospitals);
            //Nous mettons à jour le tableau des hôpitaux
            setHospitals(newHospitals);
        });
    }

    const onBack = () => {
        //onUpdate(false, 0);
        onSelection(false);
        onValidated(false);
    }

    
    return (
        <div className="Page">
        <div className="Left"><button onClick={()=> onBack()}>Retour</button></div>
            <h2> Liste des hôpitaux disponibles :</h2>
            { hospitals == null ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden" id="loading">Loading...</span>
                </Spinner>
            :
            hospitals.length === 0 ?
                <div>Il n'y a pas d'hôpital avec la spécialitédemandé proche de chez vous</div>
            :
                <Table className='table-hospital' role="table">
                    <thead >
                        <tr id="head" key="head" role="row">
                            <th key="name" role="columnheader">Nom</th>
                            <th key="vity" role="columnheader">Ville</th>
                            <th key="bed" role="columnheader">Nb lits disponible</th>
                            <th key="specialities" role="columnheader">Spécialités</th>
                            <th key="reserve" role="columnheader"></th>
                        </tr>
                    </thead>
                    <tbody >
                    {
                        hospitals.map((hospital) => 
                            
                            <tr id="values" key="values" role="row">
                                <td id="hn" role="cell">{hospital.name}</td>
                                <td id="hc" role="cell">{hospital.city.name}</td>
                                <td id="hba" role="cell">{hospital.bedAvailable}</td>
                                <td id="hs" role="cell">
                                    {hospital.specialities.map((s) =>
                                        (<div id={"speciality_"+s.id} key={"speciality_"+s.id}>{s.name}</div>)
                                    )}
                                </td>
                                <td>
                                    {hospital.bedAvailable === 0 ?
                                        <div>Il n'y a pas de lit disponible</div>
                                    :    
                                        <Button type="submit" onClick={(e) => handleMessage(e, hospital) }  className="btn-primary">Réserver</Button>
                                    }
                                </td>
                            </tr>    
                        )
                    }
                    </tbody>
                </Table>
            }
        </div>
    );
}

export default Hospital;