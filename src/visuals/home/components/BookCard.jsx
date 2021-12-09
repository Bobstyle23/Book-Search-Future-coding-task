import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const BookCard = ({ book }) => {
  let { title, imageLinks, pageCount, authors, categories, language } =
    book.volumeInfo;
  let { country, amount, buyLink } = book.saleInfo;
  return (
    <div className="book">
      <Card>
        {imageLinks ? (
          <Card.Img variant="top" src={imageLinks.thumbnail} />
        ) : null}
        <Card.Body>
          <Card.Title>Title: {title}</Card.Title>
          <Card.Subtitle>Author(s): {authors}</Card.Subtitle>
          <Card.Subtitle>Price: {amount}</Card.Subtitle>
          {/* <Card.Subtitle>{subtitle}</Card.Subtitle> */}
          <Card.Text className="book--description">
            Pages: {pageCount}
          </Card.Text>
          <Card.Text className="book--description">
            Category: {categories}
          </Card.Text>
          <Card.Text className="book--description">
            Language: {language}
          </Card.Text>
          <Card.Text className="book--description">
            Selling Country: {country}
          </Card.Text>
          <Link className="book" to={`/book/${book.id}`}>
            <Button variant="primary">Check</Button>
          </Link>
          <Link className="book" to={`/book/${book.buyLink}`}>
            <Button variant="primary">Buy</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
