import React from 'react';
import { fireEvent, render, cleanup, queryByTestId,screen, getByPlaceholderText, getAllByPlaceholderText, getByTestId, findByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainMenuBar from './MainMenuBar';

describe('Checking MainMenuBar',() =>{
    const handleEvent = jest.fn;
    test('rsdenddsers App component', () => {
        const {container} = render(<MainMenuBar onPress={handleEvent}/>);
    
        expect(screen.getByText('Add Book')).toBeInTheDocument();
    
        fireEvent.click(screen.getByText('Add Book'));
        expect(scrren.getByText('Explore')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Explore'));
        
      });
});