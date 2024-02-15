import {fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals'; 
import fetch from 'jest-fetch-mock';

import Specialities from '../components/Specialities.js';
import {CITIES, SPECIALITIES} from './data.js';

//const fetchCities = () => {return CITIES};
//const fetchSpecialities = () => {return SPECIALITIES};

beforeEach(() => {
    fetch.resetMocks()
    fetch.mockResponse('[]')
  })


describe("<Specialities />", () =>{
    jest.mock('../components/Specialities', ()=>'Specialities');

    test('render Specialities', async()=> {
        
        const { container } = render(<Specialities />);
        await waitFor(() => expect(fetch.toHaveBeenCalledWith))
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })

    
    
})
