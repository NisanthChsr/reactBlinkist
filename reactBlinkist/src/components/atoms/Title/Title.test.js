import React from 'react';
import { fireEvent, render, cleanup, screen, getAllByPlaceholderText, getByTestId } from '@testing-library/react';
import Title from './Title';

describe('Testing the title',()=>{
    it("checking the title",()=>{
        const {getByTestId} = render(<Title name='React'/>);
        expect(getByTestId('3').textContent).toBe('React');
    });
});