import React from 'react';
import { fireEvent, render,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainMenuBar from './MainMenuBar';

describe('Checking MainMenuBar',() =>{
    const handleEvent = jest.fn;
    test('rsdenddsers App component', () => {
        const {container} = render(<MainMenuBar onPress={handleEvent}/>);
    
        expect(screen.getByText('Add Book')).toBeInTheDocument();
    
        fireEvent.click(screen.getByText('Add Book'));
        expect(screen.getByText('Explore')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Explore'));
        
      });
});