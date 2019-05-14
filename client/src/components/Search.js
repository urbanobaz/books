import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addBook } from '../actions/bookActions';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    const book = document.getElementById("ibsn").value;
    console.log(book);

    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn/${book}`)
      .then(function(response) {
        console.log(response.json());
      })


    // e.preventDefault();
    // Add book via addBoook action
    // this.props.addBook(newBook);
  };

  render() {
    return (
      <Container>
        <h2 className="text-center">Add book by IBSN</h2>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="ibsn">IBSN</Label>
            <Input type="number" name="ibsn" id="ibsn" placeholder="IBSN" />
          </FormGroup>
          { this.props.isAuthenticated ? <Button>Add Book</Button> : <h4 className="text-center">Log in to add book</h4> }
        </Form>
      </Container>
      
    )
  }
}

const mapStateToProps = state => ({
  book: state.book,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addBook })(Search);
