//import Navbar from './components/Navbar';

//CSS Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import logo from './assets/instacart-logo.svg'
import bgImage from './assets/bg-image.webp'
import './App.css';
import { Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg='light' expand='lg' className='d-flex'>
        <Navbar.Brand style={{margin: '5px 0 0 20px'}} href='#home'>
          <img src={logo} alt='instacart-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end m-2 '>
          <Nav>
            <Nav.Link href='#LogIn'>Log In</Nav.Link>
            <Button variant='success'>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='d-flex' style={{
        width: '100%', 
        minHeight :'220px',
      }}>
        <Card style={{
          zIndex: '0',
          minHeight: '100%',
          width: '100%',
          backgroundColor: '#deedd6',
          backgroundImage: 'url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'right center'
          }}>
            <Card.Title style={{zIndex: '1', width:'50%'}} className='mt-4 ml-4' >
              <h1>Order groceries for delivery or pickup today</h1>
            </Card.Title>
            <Card.Body style={{zIndex: '1'}}>
              <form>
                <input type='text' placeholder='Enter Email!'></input>
                <Button variant='success' className='m-2'>Submit</Button>
              </form>
            </Card.Body>
        </Card>
      </div>
      <h2>Browse Stores in Kansas City</h2>
      <Container style={{marginTop: '40px', textAlign: 'center'}}>
          <Row style={{borderBottom: '1px solid #E8E9EB', display: 'flex', justifyContent: 'space-evenly'}}>
            <Row style={{border: '1px solid black', width: '20%', marginTop:'10px'}}>
              <Col xs='.5'>
                <Image src='https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png' roundedCircle/>
              </Col>
              <Col>
              <h5 style={{fontWeight: 'bold'}}>ALDI</h5>
              <p>Delivery * Pickup</p>
              </Col>
            </Row>
            <Col sm='1'></Col>
            <Row style={{border: '1px solid black', width: '20%', marginTop:'10px'}}>
              <Col xs='.5'>
                <Image src='https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' roundedCircle/>
              </Col>
              <Col>
              <h5 style={{fontWeight: 'bold'}}>Sprouts</h5>
              <p>Delivery * Pickup</p>
              </Col>
            </Row>
            <Col sm='1'></Col>
            <Row style={{border: '1px solid black', width: '20%', marginTop:'10px'}}>
              <Col xs='.5'>
                <Image src='https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/275/a93268cb-3405-41d0-ba37-b44d981b6c45.png' roundedCircle/>
              </Col>
              <Col>
              <h5 style={{fontWeight: 'bold'}}>Price Chopper</h5>
              <p>Delivery * Pickup</p>
              </Col>
            </Row>
            <Col sm='1'></Col>
            <Row style={{border: '1px solid black', width: '20%', marginTop:'10px'}}>
              <Col xs='.5'>
                <Image src='https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png' roundedCircle/>
              </Col>
              <Col>
              <h5 style={{fontWeight: 'bold'}}>ALDI</h5>
              <p>Delivery * Pickup</p>
              </Col>
            </Row>
            <Col sm='1'></Col>
            <Row style={{border: '1px solid black', width: '20%', marginTop:'10px'}}>
              <Col xs='.5'>
                <Image src='https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' roundedCircle/>
              </Col>
              <Col>
              <h5 style={{fontWeight: 'bold'}}>Sprouts</h5>
              <p>Delivery * Pickup</p>
              </Col>
            </Row>
            <Col sm='1'></Col>
            <Row style={{border: '1px solid black', width: '20%', marginTop:'10px'}}>
              <Col xs='.5'>
                <Image src='https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/275/a93268cb-3405-41d0-ba37-b44d981b6c45.png' roundedCircle/>
              </Col>
              <Col>
              <h5 style={{fontWeight: 'bold'}}>Price Chopper</h5>
              <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Row>
      </Container>
    </div>
  );
}

export default App;

/*
<Card.Img style={
  {
    position: 'absolute',
    zIndex: '0',
    backgroundPosition: 'right center',
    height: '100%',
    width: '100%',
    backgroundSize: 'auto',
  }
} src={bgImage}/>
*/