import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const BookCard = ({ book }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);

  let { title, imageLinks, pageCount, authors, categories, language } =
    book.volumeInfo;
  let { country, retailPrice } = book.saleInfo;

  return (
    <div className="book">
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem", backgroundColor: "	#F0F0F0" }}>
              {imageLinks ? (
                <Card.Img variant="top" src={imageLinks.thumbnail} />
              ) : null}
              <Card.Body style={{ cursor: "pointer" }}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookCard;
