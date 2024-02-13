import {fireEvent, render, screen } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals'; 

import Specialities from '../components/Specialities.js';
import {CITIES, SPECIALITIES} from './data.js';

const fetchCities = () => {return CITIES};
const fetchSpecialities = () => {return SPECIALITIES};


describe("<Specialities />", () =>{
    jest.mock('../components/Specialities', ()=>'Specialities');

    
    test('render Specialities', async()=> {
        render(<Specialities />);
        const text = screen.getByRole('status');
        expect(text).toBeInTheDocument();
    })

    /* 
    test("Do choice", async () => {
        const cities = await fetchCities;
        const specialities = await fetchSpecialities;
        render(<Specialities />);
        const button = screen.getByRole('button');
        
        //expect(button).toBeInTheDocument();
        const selection  = { speciality: 1 , city:1}
        button.dispatchEvent(new MouseEvent("click", selection));
       
    })
    */
})
