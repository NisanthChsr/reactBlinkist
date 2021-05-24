import React, { useState, useEffect } from 'react';
import LibraryBooks from './LibraryBooks';
const Library = ({ search }) => {

  const [books, setBooks] = useState([{
    "title": "Fault Lines",
    "author": "Karl Pillemer",
    "category": "Relationships",
    "image": "https://images.blinkist.com/images/books/60645e806cee070007b3bc0a/1_1/470.jpg",
    "time": "15",
    "status": "true",
    "id": 18
  },
  {
    "title": "",
    "author": "",
    "category": "",
    "image": "image.png",
    "time": "",
    "status": "true",
    "id": 19
  }]);
  const [library, setLibrary] = useState([{
    "title": "",
    "author": "",
    "category": "",
    "image": "image.png",
    "time": "",
    "status": "true",
    "id": 19
  }]);
  const resultFilter = [];

  useEffect(() => {
    fetch('http://localhost:8000/allBooks')
      .then(res => {
        return res.json();
      })
      .then(data=>{
        setBooks(data);
      });

  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setLibrary(data);
      });
  });

  const searchBooks = () => {

    if (books) {
      for (let i = 0; i < books.length; i++) {
        if (books[i].category === search) {
          resultFilter.push(books[i]);
        }
      }
    }
    return resultFilter;
  };

  const result = searchBooks();


  const addToLibrary =  (id, title, author, image, category, time) => {

    let flag = 0;
    if (library) {
      for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
          flag = i;
        }
      }

      const tempBook = {
        id, title, author, category, image, time, status: "true"
      };

       fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        body: JSON.stringify(books[flag]),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    }
  };

  return (
    <div>
      <h1>{search}</h1>
      {books && <LibraryBooks library={library} result={result} callBack={(title, author, image, category, time) => addToLibrary(title, author, image, category, time)} />}
    </div>

  );

};

export default Library;