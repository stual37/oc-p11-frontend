
import React from 'react';
import{useState} from 'react';
import {fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals'; 
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import fetch from 'jest-fetch-mock';

import Specialities from '../components/Specialities.js';
import {CITIES, SPECIALITIES} from './data.js';

//const fetchCities = () => {return CITIES};
//const fetchSpecialities = () => {return SPECIALITIES};

let container;

beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse('[]');
    container = document.createElement('div');
  document.body.appendChild(container);
  })

afterEach(() => {
document.body.removeChild(container);
container = null;
});  


describe("<Specialities />", () =>{
    //jest.mock('../components/Specialities', ()=>'Specialities');

    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            // eslint-disable-next-line no-undef
            json: jest.fn().mockResolvedValue(SPECIALITIES)
        })
    });
      
    afterEach(() => {
    jest.restoreAllMocks();
    });


    beforeEach(() => {
    global.fetch = jest.fn();
    });

    it('render Specialities', async () => {
        const mockVessels = [
            {
                "id": 1,
                "name": "Cardiologie",
                "hospitals": [
                    {
                        "id": 2,
                        "bedAvailable": 0,
                        "city": {
                            "id": 2,
                            "name": "BORDEAUX"
                        },
                        "name": "Hôpital Julia Crusher"
                    },
                    {
                        "id": 1,
                        "bedAvailable": 9,
                        "city": {
                            "id": 1,
                            "name": "PARIS"
                        },
                        "name": "Hôpital Fred Brooks"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Immunologie",
                "hospitals": [
                    {
                        "id": 3,
                        "bedAvailable": 5,
                        "city": {
                            "id": 3,
                            "name": "MARSEILLE"
                        },
                        "name": "Hôpital Beverly Bashir"
                    },
                    {
                        "id": 1,
                        "bedAvailable": 9,
                        "city": {
                            "id": 1,
                            "name": "PARIS"
                        },
                        "name": "Hôpital Fred Brooks"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Neuropathologie",
                "hospitals": [
                    {
                        "id": 3,
                        "bedAvailable": 5,
                        "city": {
                            "id": 3,
                            "name": "MARSEILLE"
                        },
                        "name": "Hôpital Beverly Bashir"
                    }
                ]
            },
            {
                "id": 4,
                "name": "Diagnostic",
                "hospitals": [
                    {
                        "id": 3,
                        "bedAvailable": 5,
                        "city": {
                            "id": 3,
                            "name": "MARSEILLE"
                        },
                        "name": "Hôpital Beverly Bashir"
                    }
                ]
            }
        ];
    
        const mockVesselSystems = [
            { id: "1" }
        ];
    
        jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
          Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockVessels),
          })
        );
    
       
    
        jest.spyOn(global, 'fetch').mockImplementationOnce((url) => {
          const vesselSystemId = url.match(/(\d+)$/)[0];
          const vesselSystem = vesselSystemId ?  
                               mockVesselSystems.find(
                                  (system) => system.id === vesselSystemId
                               ) : null;
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(vesselSystem),
          });
        });

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => waitFor(() => { 
            //const url = SPECIALITIES;
            jest.spyOn(global, 'fetch').mockImplementationOnce((SPECIALITIES) => {
                return Promise.resolve({
                  ok: true,
                  json: () => Promise.resolve(mockVessels),
                });
            });

            
            jest.spyOn(global, 'fetch').mockImplementationOnce((CITIES) => {
                return Promise.resolve({
                  ok: true,
                  json: () => Promise.resolve(mockVessels),
                });
            });

            // eslint-disable-next-line testing-library/await-async-query
            const btn =  screen.findByRole('button');
            console.log(btn);

        }));

        
        
        
    
       
    });  
      

   
    
})
