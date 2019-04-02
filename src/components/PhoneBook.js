import React, { Component } from 'react';
import { Container,Row, Col, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from 'react-toastify';

class PhoneBook extends Component {
	delete = (event) => {
		this.props.deleteContact(event.target.dataset.phone);
		toast.success("Contact Removed Successfully", {
			position: toast.POSITION.TOP_RIGHT
		})
	}
    render() {
        return (
            <Container>
				<Row className="my-3 " >
					<Col sm={{ size: 2, offset: 10 }}>
						<div className="ml-auto"><Link to="/add"><Button color="primary">Add Contacts</Button></Link> </div>
					</Col>
				</Row>
				<Row className="my-3 " >
					<Table>
					<thead>
						<tr>						
							<th>First Name</th>
							<th>Last Name</th>
							<th>Phone Number</th>
							<th>Email</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
					{this.props.contacts.map((value, index) => {
						return <tr key={index}>
							<td>{value.fname}</td>
							<td>{value.lname}</td>
							<td>{value.phone}</td>
							<td>{value.email}</td>
							<td><Button onClick={this.delete} data-phone={value.phone} color="danger">Delete</Button></td>
						</tr>
					})}
					</tbody>
					</Table>
				</Row>
			</Container>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        contacts: state.contacts
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        deleteContact: (phone) => {
            dispatch({
                type: 'REMOVE_CONTACT',
                phone
            });
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(PhoneBook);