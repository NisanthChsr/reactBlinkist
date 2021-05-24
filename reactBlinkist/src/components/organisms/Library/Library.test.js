import React from 'react';
import { fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Library from './Library';
import LibraryBooks from './LibraryBooks';

describe("Test for Library", () => {

    global.fetch = jest.fn(() => Promise.resolve());



    const handleCallBack = jest.fn();
    it("Library", async () => {
        const result = [{
            "title": "Title",
            "author": "Author",
            "category": "Politics"
        }];
        const library = [{

            "title": "Fear",
            "author": "Bob Woodward",
            "category": "Politics",
            "time": "15",
            "image": "https://images.blinkist.com/images/books/609901436cee0700077e6675/1_1/470.jpg",
            "status": "true",
            "id": 15

        }];
        render(<LibraryBooks result={result} library={library} callBack={handleCallBack} />);
        await expect(screen.getByText('+Add to library')).toBeInTheDocument();
        fireEvent.click(screen.getByText('+Add to library'));
    });

    it("Library testing", async () => {


        render(<Library search="Education" />);

        while (!screen.queryAllByText('+Add to library')) {
            setTimeout(() => {
            }, 1000);
        }
        await waitFor( ()=>{expect(screen.getByText('Grasp')).toBeInTheDocument();
        fireEvent.click(screen.getByText('+Add to library'));
    });
    });
});
