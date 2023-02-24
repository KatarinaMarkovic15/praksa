import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

function CoctailsList(props) {
    const coctails = props.allCoctails;

    return (
        <>
         <Container className="mt-3">
         <Row>
             {coctails.map((item) => (
                 <Col md={3}>
                     <Card className="shadow-lg mt-3">
                         <Card.Header className="p-3" style={{backgroundColor: '#ff9933'}}>
                            <Card.Title><Link style={{color: 'inherit'}} to={`/coctails/${item.idDrink}`}>{item.strDrink}</Link></Card.Title>
                         </Card.Header>
                         <Card.Body>
                             <Card.Img variant="top" src={`${item.strDrinkThumb}`} />
                         </Card.Body>
                     </Card>
                 </Col>
                  ))}
             </Row>
        </Container>
        </>
    );
};

export default CoctailsList;