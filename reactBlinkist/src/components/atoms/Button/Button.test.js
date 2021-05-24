import React from 'react';
import Button from './Button';
import CardButton from './CardButtons';

import { fireEvent, render, screen } from '@testing-library/react';


describe('App', () => {
    test('check the buttom name', () => {
      const {getByTestId}=render(<Button name="Click Me"/>);
      const name = getByTestId('2');
      expect(name.textContent).toBe('Click Me');
    });
  });

  describe('checking the button click', () => {
    const handleClick = jest.fn();
   
    it('Checking the click',() => {

    const {getByTestId} = render(<Button
            onClick={handleClick}
        />);
        expect(getByTestId("2")).toBeTruthy();
    });

    it('checking the function call',() => {
       render(<Button
        name='Add Book'
            onClick={handleClick}
        />);
        fireEvent.click(screen.getByText(/Add Book/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('checking thxdce function call',() => {
      render(<CardButton
       name='Add Book'
           onClick={handleClick}
       />);
       fireEvent.click(screen.getByText(/Add Book/i));
       expect(handleClick).toHaveBeenCalledTimes(1);
   });
});
