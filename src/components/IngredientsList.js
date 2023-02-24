import { Card, Col, Container, Row } from 'react-bootstrap';

function IngredientsList(props) {
    const ingredients = props.ingredients;

    return (
        <>
        <h1>All ingredients</h1>
        <Container className="mt-3">
            <Row>
                {ingredients.map((item) => (
                    <Col md={3}>
                        <Card className="shadow-lg mt-3">
                            <Card.Header style={{backgroundColor: '#ffbf80'}}>
                                <h4>{item.strIngredient1}</h4>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`} />
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
        </Container>  
        </>
        // <div className={classes.ingredients}>
        //     <h1>All ingredients</h1>
        //     <ul className={classes.list}>
        //         {ingredients.map((item) => (
        //             <li key={item.strIngredient1} className={classes.item}>
        //                 <img alt='Slika' src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`} />
        //                 <div className={classes.content}>
        //                     <h2>{item.strIngredient1}</h2>
        //                 </div>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    );
};

export default IngredientsList;