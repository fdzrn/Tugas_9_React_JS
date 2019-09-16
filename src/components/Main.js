import React, {Component} from 'react';
import {Tab, Tabs, Navbar, Container, Spinner, Table,ProgressBar, Pagination, Col} from 'react-bootstrap';

class Main extends Component {
	render(){
		return(
			<React.Fragment>
				<Container>
				  <Navbar expand="lg" variant="light" bg="light">
				    <Container>
					    <Col sm={10}>
					    	<h3>Transfer Pemain</h3>
					    </Col>
						  <Col sm={2}>
						  	<Spinner animation="border" variant="success"  />
							  <Spinner animation="grow" variant="success"  />
						  </Col>
					  </Container>
				  </Navbar>
					<Tabs defaultActiveKey="Indonesia" id="uncontrolled-tab-example">
					  <Tab eventKey="home" title="Semua Liga"></Tab>
					  <Tab eventKey="Inggris" title="Liga Inggris"></Tab>
					  <Tab eventKey="Itali" title="Liga Itali"></Tab>
					  <Tab eventKey="Spanyol" title="Liga Spanyol"></Tab>
					  <Tab eventKey="German" title="Liga German"></Tab>
					  <Tab eventKey="Indonesia" title="Liga Indonesia">
							<Table striped bordered hover>
							  <thead>
							    <tr>
							      <th>No</th>
							      <th>Nama Pemain</th>
							      <th>Klub Asal</th>
							      <th>Klub Baru</th>
							      <th>Proses</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <td>1</td>
							      <td>Amido Balde</td>
							      <td>Persebaya Surabaya</td>
							      <td>PSM Makasar</td>
							      <td><ProgressBar striped variant="info" now={100} label="100%" /></td>
							    </tr>
							    <tr>
							      <td>2</td>
							      <td>Bojan Malisic</td>
							      <td>Persib Bandung</td>
							      <td>Badak Lampung FC</td>
							      <td><ProgressBar striped variant="info" now={100} label="100%" /></td>
							    </tr>
							    <tr>
							      <td>3</td>
							      <td>Bruno Matos</td>
							      <td>Persija Jakarta</td>
							      <td>Bhayangkara FC</td>
							      <td><ProgressBar striped variant="info" now={100} label="100%" /></td>
							    </tr>
							    <tr>
							      <td>4</td>
							      <td>Yoo Hyun Koo</td>
							      <td>Kalteng Putra</td>
							      <td>Semen Padang FC</td>
							      <td><ProgressBar striped variant="info" now={100} label="100%" /></td>
							    </tr>
							    <tr>
							      <td>5</td>
							      <td>Francisco Torres</td>
							      <td>Badak Lampung FC</td>
							      <td>Barito Putera</td>
							      <td><ProgressBar striped variant="info" now={100} label="100%" /></td>
							    </tr>
							    <tr>
							      <td>6</td>
							      <td>Flavio Beck Jr</td>
							      <td>Bhayangkara FC</td>
							      <td>Semen Padang</td>
							      <td><ProgressBar striped variant="info" now={90} label="90%" /></td>
							    </tr>
							  </tbody>
							</Table>
					  </Tab>
					</Tabs>
					<Pagination>
					  <Pagination.First />
					  <Pagination.Prev />
					  <Pagination.Item active>{1}</Pagination.Item>
					  <Pagination.Ellipsis />

					  <Pagination.Item>{10}</Pagination.Item>
					  <Pagination.Item>{11}</Pagination.Item>
					  <Pagination.Item>{12}</Pagination.Item>
					  <Pagination.Item>{13}</Pagination.Item>
					  <Pagination.Item>{14}</Pagination.Item>

					  <Pagination.Ellipsis />
					  <Pagination.Item>{20}</Pagination.Item>
					  <Pagination.Next />
					  <Pagination.Last />
					</Pagination>
				</Container>
			</React.Fragment>
		);
	}
}


export default Main;