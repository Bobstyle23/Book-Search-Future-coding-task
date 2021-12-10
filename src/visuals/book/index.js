import React, { useState, useEffect } from "react";
import axios from "axios";
import isEmpty from "lodash/isEmpty";
import "./book.css";
import { Spinner, Card, Container, Col, Row } from "react-bootstrap";
const createMarkup = (markup) => ({ __html: markup });

const Book = ({ match: { params } }) => {
  const [bookInfo, setBookInfo] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${params.ID}`)
      .then((response) => {
        setBookInfo(response.data);
      })
      .catch(() => {
        setBookInfo({});
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [params.ID]);

  let jsxStr = "";
  if (isFetching) {
    jsxStr = <Spinner animation="border" variant="primary" />;
  }

  if (!isEmpty(bookInfo)) {
    // let { title, subtitle, imageLinks, description, authors } =
    //   bookInfo.volumeInfo;
    let {
      title,
      imageLinks,
      pageCount,
      authors,
      categories,
      language,
      description,
      publishedDate,
      publisher,
      printType,
    } = bookInfo.volumeInfo;
    let { country, retailPrice } = bookInfo.saleInfo;
    jsxStr = (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              {imageLinks ? (
                <Card.Img variant="top" src={imageLinks.thumbnail} />
              ) : null}
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "30rem", backgroundColor: "	#F0F0F0" }}>
              <Card.Body>
                <Card.Title>Title: {title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Author: {authors}
                </Card.Subtitle>
                {retailPrice ? (
                  <Card.Text className="book--description">
                    Price: {retailPrice.amount} {retailPrice.currencyCode}
                  </Card.Text>
                ) : (
                  ""
                )}
                <Card.Text className="mb-2 text-muted">
                  Print Type: {printType}
                </Card.Text>
                <Card.Text>Published: {publishedDate}</Card.Text>
                <Card.Text>Publisher: {publisher}</Card.Text>
                <Card.Text className="book--description">
                  Pages: {pageCount}
                </Card.Text>
                <Card.Text className="book--description">
                  Category: {categories[0]}
                </Card.Text>
                <Card.Text className="book--description">
                  Language: {language}
                </Card.Text>
                <Card.Text className="book--description">
                  Selling Country: {country}
                </Card.Text>
                <Card.Text>
                  <p style={{ fontWeight: "bold" }}>Description:</p>{" "}
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div id="book" className="page">
      <div className="container">{jsxStr}</div>
    </div>
  );
};
export default Book;
