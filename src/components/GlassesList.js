import { Card, Col, Container, Row } from 'react-bootstrap';

function GlassesList(props) {
    const glasses = props.glasses;
    return (
        <>
            <h1>All glasses</h1>
            <Container className="mt-3">
                <Row>
                    {glasses.map((item) => (
                        <Col md={3}>
                            <Card className="shadow-lg mt-3">
                                <Card.Body style={{backgroundColor: '#ffbf80'}}>
                                    <h4>{item.strGlass}</h4>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
            </Container>
            </>
        // <div className={classes.glasses}>
        //     <h1>All glasses</h1>
        //     <ul className={classes.list}>
        //         {glasses.map((item) => (
        //             <li key={item.strGlass} className={classes.item}>
        //                 <div className={classes.content}>
        //                     <h2>{item.strGlass}</h2>
        //                 </div>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    );
};

export default GlassesList;