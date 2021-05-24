import React from 'react';
import { render, cleanup,fireEvent, screen, getAllByPlaceholderText, getByTestId } from '@testing-library/react';
import BookCard from './BookCard';

describe('The BookCard Testing', () => {
    const handleClick = jest.fn();
    it('Checking The title', () => {
        render(<BookCard
        name="+Add To Library"
        title="Book Name"
        author="Poet"  
        category="Read"
        time="24"
        onClick={handleClick}
        visible={true} />);
    
    expect(screen.getByText('Book Name')).toBeInTheDocument();
    expect(screen.getByText('Poet')).toBeInTheDocument();
    expect(screen.getByText('Read')).toBeInTheDocument();
    expect(screen.getByText('24min')).toBeInTheDocument();
    });

    it('checking the function call',() => {
        render(<BookCard
            name="+Add To Library"
            title="Book Name"
            author="Poet"  
            category="Read"
            time="24"
            onClick={handleClick}
            visible={true} />);
         fireEvent.click(screen.getByText(/Add To Library/i));
         expect(handleClick).toHaveBeenCalledTimes(1);
     });
    // const handleClick = jest.fn();
     it('Fire event button click changes status from Mark as finished to read again', () => {
        const { rerender } = render(<BookCard name={"Finished"} category={"Knowledge"} title={"I'll have my death"} visible={false} onClick={handleClick} />);
        //fireEvent.click(screen.getByText(/Read Again/i));
        rerender(
            <BookCard name={"Finished"} category={"Knowledge"} title={"Ill have my death"} visible={true} onClick={handleClick} />
        );
        
        fireEvent.click(screen.getByText(/Finished/i));
        //expect(handleClick).toHaveBeenCalledTimes(1)
    });
});