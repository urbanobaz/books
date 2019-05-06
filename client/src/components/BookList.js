import React, { Component } from "react";
import {
  Container,
  Button,
  CardColumns,
  Card,
  CardTitle,
  CardText
} from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getBooks, deleteBook } from "../actions/bookActions";
import PropTypes from "prop-types";

class BookList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  onDeleteClick = id => {
    this.props.deleteBook(id);
  };

  render() {
    const { books } = this.props.book;
    return (
      /* <ListGroup>
          <TransitionGroup className="book-list">
            {books.map(({ id, name, author, pages, rating }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >&times;</Button>
                  {name} by {author} with {pages} pages. Rating={rating}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup> */
      <div>
        <Container>
          {/* <CardColumns>
            <TransitionGroup className="book-list">
              {books.map(({ id, name, author, pages, rating }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <Card className="m-1">
                    <Container>
                      <CardTitle className="h5 text-center">{name}</CardTitle>
                      <CardText className="text-center">
                        Author: {author}
                      </CardText>
                      <CardText className="text-center">Pages: {pages}</CardText>
                      <CardText className="text-center" value="0.00">
                        Rating: {rating}
                      </CardText>
                      <Button
                        className="remove-btn mb-2"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, id)}
                        block
                      >
                        &times;
                      </Button>
                    </Container>
                  </Card>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </CardColumns> */}

          <CardColumns>
            {books.map(({ _id, name, author, pages, rating }) => (
              <Card className="m-1">
                <Container>
                  <CardTitle className="h5 text-center">{name}</CardTitle>
                  <CardText className="text-center">Author: {author}</CardText>
                  <CardText className="text-center">Pages: {pages}</CardText>
                  <CardText className="text-center" value="0.00">
                    Rating: {rating}
                  </CardText>
                  <Button
                    className="remove-btn mb-2"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                    block
                  >
                    Delete Book From List
                  </Button>
                </Container>
              </Card>
            ))}
          </CardColumns>
        </Container>
      </div>
      
    );
  }
}

BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  book: state.book
});

export default connect(
  mapStateToProps,
  { getBooks, deleteBook }
)(BookList);
