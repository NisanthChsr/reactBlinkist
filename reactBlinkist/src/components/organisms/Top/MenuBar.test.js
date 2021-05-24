import React from 'react';
import { fireEvent, render, cleanup, screen   } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuBar from './MenuBar';

afterEach(cleanup);

describe('MenuBar', () => {
  test('renders App component', () => {
    render(<MenuBar />);

    expect(screen.getByText('Currently reading')).toBeInTheDocument();
  });

  test('rendefrs App component', () => {
    render(<MenuBar />);
    expect(screen.getByText('Finished')).toBeInTheDocument();
    fireEvent.click(screen.getAllByTestId('2')[1]);
    fireEvent.click(screen.getByText('Add Book'));
    fireEvent.change(screen.getAllByTestId('1')[0]);
    fireEvent.change(screen.getAllByTestId('1')[1]);
    fireEvent.change(screen.getAllByTestId('1')[2]);
    fireEvent.change(screen.getAllByTestId('1')[3]);
    fireEvent.click(screen.getByText('Submit'));
    fireEvent.click(screen.getAllByTestId('2')[2]);
    fireEvent.click(screen.getAllByTestId('2')[3]);
    fireEvent.click(screen.getAllByTestId('2')[4]);
    fireEvent.click(screen.getAllByTestId('2')[5]);
    
    expect(screen.getByText('Add Book')).toBeInTheDocument();
    expect(screen.getByText('Explore')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('icon'));
   
        fireEvent.change(screen.getByPlaceholderText('Search for books,authors'), {target: {value: 'value'}});
        fireEvent.click(screen.getByRole('icon'));

    
  });

  test('rendsers App component', () => {
    render(<MenuBar />);
    const button = screen.getByText('Explore');
    fireEvent.click(screen.getByText('Explore'));
    expect(screen.getByText('Politics')).toBeInTheDocument();
    fireEvent.click(button);
    //fireEvent.click(screen.getByText('+Add to library'));

  });
  test('rsdendsers App component', () => {
    render(<MenuBar />);
    const button = screen.getByText('Finished');
    fireEvent.click(button);
    expect(screen.getByText('Finished')).toBeInTheDocument();
  });

  test('rsdenddsers App component', () => {
    const {container} = render(<MenuBar />);

    expect(screen.getByText('Add Book')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Add Book'));

    expect(screen.getByText('Submit')).toBeInTheDocument();
        
    fireEvent.click(screen.getByText('Submit'));

  });

});
