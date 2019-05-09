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
  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getBooks();
  }

  onDeleteClick = id => {
    this.props.deleteBook(id);
  };

  render() {
    const { books } = this.props.book;
    return (
      <div>
        <Container>
          <CardColumns>
            {books.map(({ _id, name, author, pages, rating }) => (
              <Card key={_id} className="m-1">
                <Container>
                  <CardTitle key={name} className="h5 text-center">
                    {name}
                  </CardTitle>
                  <CardText key={author} className="text-center">
                    Author: {author}
                  </CardText>
                  <CardText key={pages} className="text-center">
                    Pages: {pages}
                  </CardText>
                  <CardText key={rating} className="text-center" value="0.00">
                    Rating: {rating}
                  </CardText>
                  {this.props.isAuthenticated ? (
                    <Button
                      className="remove-btn mb-2"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                      block
                    >
                      Delete Book From List
                    </Button>
                  ) : null}
                </Container>
              </Card>
            ))}
          </CardColumns>
        </Container>

        {/* <ListGroup>
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
        </ListGroup> */}

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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getBooks, deleteBook }
)(BookList);
