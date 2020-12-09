import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import FirebaseService from '../services/FirebaseService';

class CustomerEdit extends Component {

  emptyCustomer = {
    id: '',
    firstname: '',
    lastname: '',
    age: "",
    address: '',
    copyrigtby: 'https://loizenai.com'
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyCustomer
    };
    this.unsubscribe = undefined;
  }

  componentDidMount = () => {
    let id = this.props.match.params.id
    if (id !== 'new') {
      this.unsubscribe = FirebaseService.get(id).onSnapshot(this.onDataChange);
    }
  }

  componentWillUnmount = () => {
    if(this.unsubscribe !== undefined){
      this.unsubscribe();
    }
  }

  onDataChange = (item) => {
    let data = item.data();
    let customer = {
      id: item.id,
      firstname: data.firstname,
      lastname: data.lastname,
      age: data.age,
      address: data.address,
      copyrightby: 'https://loizenai.com'
    };

    this.setState({
      item: customer,
    });
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {item} = this.state;
    let id = this.props.match.params.id
    if (id !== 'new') {
      FirebaseService.update(id, item);
    } else {
      FirebaseService.addCustomer(item);
    }

    this.props.history.push('/customers');
  };

  render = () => {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Customer' : 'Add Customer'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="firstname">Firstname</Label>
            <Input type="text" name="firstname" id="firstname" value={item.firstname || ''}
                   onChange={this.handleChange} autoComplete="firstname"/>
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Lastname</Label>
            <Input type="text" name="lastname" id="lastname" value={item.lastname || ''}
                   onChange={this.handleChange} autoComplete="lastname"/>
          </FormGroup>          
          <FormGroup>
            <Label for="age">Age</Label>
            <Input type="text" name="age" id="age" value={item.age || ''}
                   onChange={this.handleChange} autoComplete="age"/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address" value={item.address || ''}
                   onChange={this.handleChange} autoComplete="address"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/customers">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(CustomerEdit);