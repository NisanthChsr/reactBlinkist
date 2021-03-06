import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import BooksCollection from './BooksCollection';
import Header from '../HeaderTool/Header';
global.fetch = jest.fn(() => Promise.resolve());
const books = [
    {
        "id": 1,
        "title": "Test 1",
        "author": "Nisanth",
        "category": "Politics",
        "time": "20",
        "status": "true"
    },
    {
        "id": 2,
        "title": "Test 2",
        "author": "Nisanth",
        "category": "Politics",
        "time": "20",
        "status": "true"
    }
];
it('Switch tabs when clicked on a different tab', async () => {
    global.fetch = jest.fn(() => Promise.resolve());

    render(<BooksCollection search={""} />);


   fireEvent.click(screen.getAllByText("Completed")[0]);

   expect(screen.getByText('Currently reading')).toBeInTheDocument();

});

it('Check Header for Book cards', async () => {
   
    const handleClick = jest.fn();
    const {rerender} = render(<Header name='Finished' books={books} status={"false"} onClick={jest.fn()} />);

    
    expect(screen.queryByText("Read Again")).toBeNull();
   
    rerender(
        <Header name='Finished' books={books} status={"true"}  />
    );
    
    expect(screen.queryByText("Completed")).toBeNull();

});

