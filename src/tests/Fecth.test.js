import React from 'react';
import '@testing-library/jest-dom';
import 'jest-fetch-mock';
import Fetch from '../components/Fetch.js';

import {CITIES, SPECIALITIES} from './data.js';


describe('Fetch', () => {
    const fetchCities = () => {return CITIES};
    const fetchSpecialities = () => {return SPECIALITIES};
    
    const url = 'htt://localhost:9000/specialities';
    let mockResponse = {};
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          // eslint-disable-next-line no-undef
          json: jest.fn().mockResolvedValue(mockResponse)
        })
    });
    
    afterEach(() => {
    jest.restoreAllMocks();
    });
    
    test('getCities', async()=> {
        // Test sur la méthode fetch
        
        const res = jest.fn(() => fetchCities);
        console.log(res);
    })
})