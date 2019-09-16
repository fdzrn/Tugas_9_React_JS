import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Col, Row, Breadcrumb} from 'react-bootstrap';

class Header extends Component {
	render(){
		return(
		<React.Fragment>
			<Navbar bg="dark" variant="dark">
		    <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link href="#">Home</Nav.Link>
		      <Nav.Link href="#">Berita</Nav.Link>
		      <Nav.Link href="#">Live Score</Nav.Link>
		      <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
		        <NavDropdown.Item href="#">Piala</NavDropdown.Item>
		        <NavDropdown.Item href="#">liga</NavDropdown.Item>
		      </NavDropdown>
		      <Nav.Link href="#">Tranfer Pemain</Nav.Link>
		      <Nav.Link href="#">Tim</Nav.Link>
		    </Nav>
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-info">Search</Button>
		    </Form>
			</Navbar>
			<Container>
			  <Row>
			    <Col md={{ span: 4, offset: 7 }}>
			    	<Breadcrumb>
						  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
						  <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
						  <Breadcrumb.Item active>Tranfers Pemain</Breadcrumb.Item>
						</Breadcrumb>
			    </Col>
			  </Row>
			</Container>
		</React.Fragment>
		);	
	}
}

export default Header;