import React, { Component } from 'react';
import {
  Container,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addBook } from '../actions/bookActions';
import PropTypes from 'prop-types';

class BookModal extends Component {
  state = {
    modal: false,
    name: ''
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newBook = {
      name: this.state.name,
      author: this.state.author,
      pages: this.state.pages,
      rating: this.state.rating
    }

    // Add book via addBoook action
    this.props.addBook(newBook);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        { this.props.isAuthenticated ? <Container>
          <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={this.toggle}
            block
          >Add Book</Button>  
        </Container> : <h4 className="mb-3 text-center">Please log in to add book</h4> }

        

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add Book To List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="book">Book &darr;</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Title"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Author"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Input
                  type="number"
                  name="pages"
                  id="pages"
                  placeholder="Pages"
                  className="mb-2"
                  min="1"
                  onChange={this.onChange}
                />
                <Input
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="Rating"
                  className="mb-2"
                  min="0"
                  max="5"
                  step="0.01"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Add Book</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addBook })(BookModal);