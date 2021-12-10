import React from "react";
import {
  Button,
  Form,
  Container,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../actions";
import debounce from "lodash/debounce";

const Search = ({ getBooks, query }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const debouncedGetBooks = debounce((query) => {
    getBooks(query);
  }, 700);

  const onInputChange = (e) => {
    debouncedGetBooks(e.target.value);
  };

  return (
    <div className="search-books">
      <Container>
        <Form className="search-books--form" onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              onChange={onInputChange}
              placeholder="Search..."
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>

        <Form className="search-books--form">
          <Form.Group>
            <Form.Control type="text" placeholder="Categories" />
          </Form.Group>
          <DropdownButton
            variant="outline-primary"
            title="All"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#">Art</Dropdown.Item>
            <Dropdown.Item href="#">Biography</Dropdown.Item>
            <Dropdown.Item href="#">Computers</Dropdown.Item>
            <Dropdown.Item href="#">History</Dropdown.Item>
            <Dropdown.Item href="#">Medical</Dropdown.Item>
            <Dropdown.Item href="#">Poetry</Dropdown.Item>
          </DropdownButton>
        </Form>

        <Form className="search-books--form">
          <Form.Group>
            <Form.Control type="text" placeholder="Sort by" />
          </Form.Group>
          <DropdownButton
            variant="outline-primary"
            title="Relevance"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#">Newest</Dropdown.Item>
          </DropdownButton>
        </Form>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.books.query,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBooks,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
