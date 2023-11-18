import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://a.cdn-hotels.com/gdcs/production24/d1493/38448f6b-50cb-4edb-ba1b-41e72a2d0db7.jpg?impolicy=fcrop&w=800&h=533&q=medium" />
      <Card.Body>
        <Card.Title id='card-title'>Card Title</Card.Title>
        <Card.Text id='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
  }