
import {fireEvent, render, screen } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals'; 


import {FormOption} from '../components/FormOption.js';
import {CITIES, SPECIALITIES} from './data.js';

describe("<FormOption />", () =>{
    jest.mock('../components/FormOption', ()=>'FormOption');

    
    test('render FormOption', ()=> {

        const formOption = <FormOption 
        label = "Quelle est la ville la plus proche de chez vous?"
        id = "city"
        placholder = "Veuillez choisir une ville"
        object = {CITIES}
        defaut = "city_0"
    />;
        render(formOption);
        const text = screen.getByText('Quelle est la ville la plus proche de chez vous?');
        expect(text).toBeInTheDocument();
    })

})
