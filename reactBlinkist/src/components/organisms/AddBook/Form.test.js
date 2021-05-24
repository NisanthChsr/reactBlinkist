import React from 'react';
import { fireEvent,render, screen } from "@testing-library/react"; 
import Form from './Form';
import '@testing-library/jest-dom/extend-expect';

describe('testing the form', () => {

    global.fetch = jest.fn(() => Promise.resolve());

    const handleClick = jest.fn();

    it('Form submission', () => {
        const {getByPlaceholderText} = render(<Form parentCallback={handleClick} />);
        
        fireEvent.change(getByPlaceholderText('Title'),{target: {value: 'Title'}});
        fireEvent.change(getByPlaceholderText('Author'),{target: {value: 'Author'}});
        fireEvent.change(getByPlaceholderText('Category'),{target: {value: 'Category'}});
        fireEvent.change(getByPlaceholderText('Time'),{target: {value: '20'}});
        fireEvent.click(screen.getByText('Submit'));
        
        expect(screen.getByText("Add Book")).toBeInTheDocument();

    });
});
