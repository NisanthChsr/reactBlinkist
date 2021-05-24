import React from 'react';
import { fireEvent,render, screen } from "@testing-library/react"; 
import Explore from './Explore';
import '@testing-library/jest-dom/extend-expect';

describe("Check the explore functionality", () => {
    const handleClick=jest.fn();
    it("Checking the Categories",()=>{
        
            render(<Explore getExploreCategory={handleClick}/>);
            const button = screen.getByText('Explore');
            fireEvent.click(button);
            expect(screen.getByText('Politics')).toBeInTheDocument();
            fireEvent.click(screen.getByText('Politics'));
            fireEvent.click(screen.getByText('Entrepreneurship'));
            fireEvent.click(screen.getByText('Science'));
            fireEvent.click(screen.getByText('Education'));
            fireEvent.click(screen.getByText('Economics'));
            fireEvent.click(screen.getByText('Motivation'));
            fireEvent.click(screen.getByText('Health'));
            fireEvent.click(screen.getByText('Communication skills'));
            
            fireEvent.click(screen.getByText('Philosophy'));
            fireEvent.click(screen.getByText('Career & Success'));
            fireEvent.click(screen.getByText('Society & Culture'));
            fireEvent.click(screen.getByText('Technology & Future'));
            fireEvent.click(screen.getByText('History'));
            fireEvent.click(screen.getByText('Religion & Spirituality'));
            fireEvent.click(screen.getByText('Relationships'));
           
      });
});
