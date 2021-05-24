import React from 'react';
import Text from './TextField';
import { fireEvent, render, cleanup, screen, getAllByPlaceholderText, getByTestId } from '@testing-library/react';




describe('checking the textfield', () => {
    const handleChange = jest.fn();
it('Checking the input value',() => {

    const {container} = render(<Text
        onChange={handleChange} value={''}/>);
        const input = container.querySelector("input");
        fireEvent.change(input, {target: {value: 'value'}});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});


test("test the placeholder in input", () => {
    const {getByPlaceholderText} = render(<Text name='Test'/>);
    
  getByPlaceholderText('Test');

});
