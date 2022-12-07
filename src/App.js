import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { } from "react-bootstrap"

function App() {
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">FlixFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://pictures.artify.tn/media/agipoa4fnrsgazhnnkcg.png" />
        <Card.Body>
          <Card.Title>La Fuite</Card.Title>
          <Card.Text>
          Un extrémiste religieux s'échappe des forces de sécurité et se réfugie chez
          une prostituée qui l'aide à faire face à la situation malgré leurs 
          mentalités contradictoires.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg" />
        <Card.Body>
          <Card.Title>Parasite</Card.Title>
          <Card.Text>
          Les différences de classe entre une famille pauvre et
          une famille aisée apparaissent au grand jour. Lorsque Ki-woo obtient un poste 
          de tuteur chez les riches Parks, il fait en sorte que ses parents et sa soeur soient
          également engagés.          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.filmspourenfants.net/wp-content/uploads/2018/02/zootopie-a-375x500.jpg" />
        <Card.Body>
          <Card.Title>Zootopia</Card.Title>
          <Card.Text>
          Zootopia est une ville qui ne ressemble à aucune autre : seuls les animaux y habitent ! On y 
          trouve des quartiers résidentiels élégants 
          comme le très chic Sahara Square, et d'autres moins hospitaliers comme le glacial Tundratown. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default App;
