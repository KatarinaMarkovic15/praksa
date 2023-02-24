import { Card, Col, Container, Row } from 'react-bootstrap';

function CategoriesList(props) {
    const categories = props.categories;
    return (
        <>
        <h1>All categories</h1>
        <Container className="mt-3">
         <Row>
             {categories.map((item) => (
                 <Col md={3}>
                     <Card className="shadow-lg mt-3">
                         <Card.Body style={{backgroundColor: '#ffbf80'}}>
                            <h4>{item.strCategory}</h4>
                         </Card.Body>
                     </Card>
                 </Col>
                  ))}
             </Row>
        </Container>
        </>
    );
};

export default CategoriesList;