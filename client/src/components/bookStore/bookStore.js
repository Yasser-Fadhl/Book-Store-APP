import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./bookStore.css";
function BookStore() {
  const [book, setBook] = useState([]);
  let bookName, author, category, price, picture;

  const getBooks = () => {
    Axios.get("http://localhost:3001/books", {
      bookName,
      author,
      category,
      price,
      picture,
    })
      .then((res) => {
        setBook(res.data);
      })
      .catch((ex) => {
        console.log(ex.response.data);
      });
  };
  useEffect(() => {
    getBooks();
  }, []);

  console.log("my book" + book);
  return (
    // <div className="bookStore ">
    /* <div className="bookContainer"> */
    <div className="container Cont">
      <div className="row row-cols-3">
        {book.map((b) => {
          return (
            <div key={bookName} className="col">
              <img src={b.picture} alt="Book" />
              <h3>{b.bookName}</h3>
              <h4>{b.author}</h4>
              <h4>{b.price}$</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookStore;

/* <div class="container">
  <div class="row row-cols-2">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div> */
