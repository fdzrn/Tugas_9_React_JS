import React, {Component} from 'react';
import {Container, OverlayTrigger, Button, Popover, Collapse} from 'react-bootstrap';
class Footer extends Component {
	constructor(props){
		super(props);
		this.state = {klik: false}
	}
	render() {
		const info =	<Popover id="popover-basic">
								    <Popover.Title as="h3">Informasi Website</Popover.Title>
								    <Popover.Content>
								    	Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita sepakbola
								    </Popover.Content>
								  </Popover>
		return(
			<Container>
				 <OverlayTrigger trigger="click" placement="right" overlay={info}>
			    <Button variant="primary">informasi</Button>
			  </OverlayTrigger>
			  <Button variant="primary" onClick={() => this.setState({klik: !this.state.klik})}>Versi Website</Button>
			  <Collapse in={this.state.klik}>
					<p>Akses Sport Versi 1.0</p>
			  </Collapse>
			</Container>
		);
	}
}

export default Footer;