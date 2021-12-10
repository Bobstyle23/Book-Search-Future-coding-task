import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import BookCard from "../components/BookCard";
import { Spinner } from "react-bootstrap";
const renderBooksList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let { items: books, totalItems } = data;
  console.log(data);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Search results for: "{query}"</h3>
        <p>Total results: {totalItems}</p>
      </div>
      <div className="books-list">
        {books.map((books) => (
          <BookCard key={books.id} book={books} />
        ))}
      </div>
    </>
  );
};

const Books = ({ data, isFetching, query, error }) => {
  let jsxStr = "";

  if (isFetching) {
    jsxStr = <Spinner animation="border" variant="primary" />;
  } else if (!isEmpty(error)) {
    jsxStr = (
      <h1 style={{ color: "red", textAlign: "center" }}>
        Search for desired books!
      </h1>
    );
  } else {
    jsxStr = renderBooksList(data, query);
  }
  return <div className="books">{jsxStr}</div>;
};

const mapStateToProps = (state) => {
  let { data, isFetching, query, error } = state.books;
  return {
    data,
    isFetching,
    query,
    error,
  };
};

export default connect(mapStateToProps, null)(Books);
