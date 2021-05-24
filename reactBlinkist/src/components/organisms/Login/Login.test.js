import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAuth0 } from '@auth0/auth0-react';
import MenuBar from '../Top/MenuBar';
jest.mock("@auth0/auth0-react");

const mockLib = jest.fn();

it("MenuBar should render with login button initially", () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib
    });
    render(<MenuBar />);
    screen.getByText("Login");
    expect(mockLib).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByText("Login"));
    expect(mockLib).toHaveBeenCalledTimes(1);
});

it("MenuBar should render with logout if authenticated", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: true,
        loginWithRedirect: jest.fn(),
        user: {
            name: "Nisanth",
            picture: "https://www.google.com/search?q=images&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjUsOqGqODwAhWDj-YKHZjdC0YQ_AUoAXoECAEQAw&biw=1294&bih=669#imgrc=GEQYC6WSjtkqBM"
        }
    });
    render(<MenuBar />);
    screen.getByAltText("Nisanth");
});
