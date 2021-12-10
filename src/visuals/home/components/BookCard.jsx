import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";

const BookCard = ({ book }) => {
  let { title, imageLinks, pageCount, authors, categories, language } =
    book.volumeInfo;
  let { country, retailPrice } = book.saleInfo;

  return (
    <div className="book">
      <Container>
        <Card style={{ width: "18rem", backgroundColor: "	#F0F0F0" }}>
          {imageLinks ? (
            <Card.Img variant="top" src={imageLinks.thumbnail} />
          ) : null}
          <Card.Body>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Subtitle>Author: {authors}</Card.Subtitle>
            {retailPrice ? (
              <Card.Text className="book--description">
                Price: {retailPrice.amount} {retailPrice.currencyCode}
              </Card.Text>
            ) : (
              ""
            )}
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
            <Link to={`/book/${book.id}`}>
              <Button variant="primary">Check</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default BookCard;
