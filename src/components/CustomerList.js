import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import FirebaseService from '../services/FirebaseService';

class CustomerList extends Component {

  constructor(props) {
    super(props);
    this.state = {customers: [], isLoading: true};
    this.remove = this.remove.bind(this);
    this.unsubscribe = undefined;
  }

  componentDidMount = () => {
    this.unsubscribe = FirebaseService.getAll().orderBy("firstname", "asc").onSnapshot(this.onDataChange)
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  onDataChange = (items) => {
    console.log(items);
    let customers = [];
    items.forEach(item => {
      let data = item.data();
      customers.push({
        id: item.id,
        firstname: data.firstname,
        lastname: data.lastname,
        address: data.address,
        age: data.age,
        copyrightby: "https://loizenai.com"
      });
    });

    this.setState({
      customers: customers,
      isLoading: false
    });
  }

  async remove(id) {
    FirebaseService.delete(id)
    .then(() => {
      let updatedCustomers = [...this.state.customers].filter(i => i.id !== id);
      this.setState({customers: updatedCustomers});
    });
  }

  render() {
    const {customers, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const customerList = customers.map(customer => {
      return <tr id={customer.id}>
        <td style={{whiteSpace: 'nowrap'}}>{customer.firstname}</td>
        <td>{customer.lastname}</td>
        <td>{customer.age}</td>
        <td>{customer.address}</td>
        <td><a href={customer.copyrightby}>{customer.copyrightby}</a></td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/customers/" + customer.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(customer.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/customers/new">Add Customer</Button>
          </div>
          <h3>Customer List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Firstname</th>
                <th width="20%">Lastname</th>
                <th width="10%">Age</th>
                <th>Address</th>
                <th>Copyrightby</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {customerList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default CustomerList;