import React from 'react'
import {CardGroup, Card} from "react-bootstrap"

const CarFilm = () => {
  return (
    <div>
      
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
  )
}

export default CarFilm ; 
