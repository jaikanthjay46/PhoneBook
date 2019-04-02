import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add.js';
import PhoneBook from './components/PhoneBook.js';
import { BrowserRouter,Route} from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar color="dark"  expand="md">
          <NavbarBrand href="/">PhoneBook</NavbarBrand>        
        </Navbar>
        <ToastContainer></ToastContainer>
        <Route exact path="/" component={PhoneBook} />
        <Route path="/add" component={Add} />
      </BrowserRouter>
    );
  }
}

export default App;
