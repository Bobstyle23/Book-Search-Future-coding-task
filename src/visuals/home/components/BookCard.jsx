import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const BookCard = ({ book }) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(30);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=books`
      );
      setPost(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  let { title, imageLinks, pageCount, authors, categories, language } =
    book.volumeInfo;
  let { country, retailPrice } = book.saleInfo;

  console.log(book.volumeInfo);
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
