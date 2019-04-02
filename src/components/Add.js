import React, { Component } from 'react';
import {Container, Row, Col, Form, FormGroup, Input,Label, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from 'react-toastify';

class Add extends Component {
     
	addContact = (event) =>{
		event.preventDefault();
		console.log(event.target);
		const data = new FormData(event.target);
		var tmp = true;
		this.props.contacts.forEach( x => {
			if(data.get("number") == x.number){
				tmp = false;
			}
		})
		if( tmp ) {
			this.props.addContact(data);
			toast.success("Contact Added Successfully", {
				position: toast.POSITION.TOP_RIGHT
			})
		} else {
			toast.error("Contact Already Exists", {
				position: toast.POSITION.TOP_RIGHT
			})
		}
		
	}
    render() {
        return (
           <Container>
			   <Row className="my-3 " >
					<Col sm={{ size: 4, offset: 8 }}>
						<center><Link to="/"><Button color="danger">Back</Button></Link> </center>
					</Col>
				</Row>
				<Row className="my-3 ">
					<Form onSubmit={this.addContact}>
						<FormGroup>
							<Label for="fname">First Name</Label>
							<Input type="text" name="fname" id="fname" placeholder="First Name" />
						</FormGroup>
						<FormGroup>
							<Label for="lname">Last Name</Label>
							<Input type="text" name="lname" id="lname" placeholder="Last Name" />
						</FormGroup>
						<FormGroup>
							<Label for="phone">Phone</Label>
							<Input type="number" name="phone" id="phone" placeholder="Phone" />
						</FormGroup>
						<FormGroup>
							<Label for="email">Email</Label>
							<Input type="email" name="email" id="email" placeholder="example@example.com" />
						</FormGroup>
						<Button color="primary">ADD</Button>
					</Form>
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
        addContact: (contact) => {
            dispatch({
                type: 'ADD_CONTACT',
                contact
            });
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Add);