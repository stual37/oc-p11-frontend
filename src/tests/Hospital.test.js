import {fireEvent, render, screen } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals'; 

import Hospital from '../components/Hospital.js';

describe("<Hospital />", () => {
    test('List hospital', () => {
        const selection = {speciality: 1, city: 1} ;
        render(<Hospital selection={selection} />);
    })

    test('reserve bed', ()=> {
        const selection = {speciality: 1, city: 1} ;
        render(<Hospital selection={selection} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        button.dispatchEvent(new MouseEvent("click", { hospital: 1 }));
    })

})