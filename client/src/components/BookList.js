import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class BookList extends Component {
  state= {
    books: [
      { id: uuid(), name: 'Mastery', author: 'Michael Green', pages: '400', rating: '4.7' },
      { id: uuid(), name: 'Reasons To Stay Alive', author: 'Matt Haig', pages: '240', rating: '4.9' },
      { id: uuid(), name: 'Principles', author: 'Ray Dalio', pages: '550', rating: '5.0' },
      { id: uuid(), name: 'A New Earth', author: 'Eckhart Tolle', pages: '250', rating: '4.8' }
    ]
  }

  render() {
    const { books } = this.state;
    return(
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Book');
            const author = prompt('Enter Author');
            if(name) {
              this.setState(state => ({
                books: [...state.books, { id: uuid(), name, author }]
              }));
            }
          }}
        >
          Add Book
        </Button>

        <ListGroup>
          <TransitionGroup className="book-list">
            {books.map(({ id, name, author, pages, rating }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        books: state.books.filter(book => book.id !== id)
                      }));
                    }}
                  >&times;</Button>
                  {name} by {author} with {pages} pages. Rating={rating}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default BookList;