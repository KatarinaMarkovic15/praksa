import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getLookup } from '../Service/Service';

import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { drinksActions } from '../store/index.js';

function CoctailDetailPage() {
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [instructions, setInstructions] = useState('');

    const dispatch = useDispatch();
    const postoji = useSelector(state => state.postoji);

    const params = useParams();
    const {coctailId: parametar} = params;

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = () => {
        setErrorMsg('');

        getLookup(parametar)
        .then(response => {
            if(!response.data.drinks) {
                setData(response.data.drinks);
                setErrorMsg('An error ocured. This cocktail does not exist. Check the HTTP get request and the parameter you entered!');
                
                return;
            }

            setData(response.data.drinks);
            setErrorMsg('');
    
            let trenutni = response.data.drinks[0].idDrink;

            dispatch(drinksActions.promeni(trenutni));
        });
    }

    const changeHandler = event => {
        setInstructions(event.target.value);
        if(event.target.value === 'English' || event.target.value === 'Spanish' || event.target.value === 'German' || event.target.value === 'French' || event.target.value === 'Italian') {
            setInstructions('No instructions are available for the selected language.');
        }
    }

    const clickHandler = item => {
        dispatch(drinksActions.setItem(item));
    }

    const getImages = (item) => {
        const result = [];

        for(let i = 0; i < 15; i++) {
            let str = `strIngredient${i+1}`;
            result.push(
                <>
                 <Card style={{ width: '18rem', margin: 'auto' }}>
                    {item[str] === null ? <></> : 
                    <ListGroup variant="flush">
                        <ListGroup.Item>{item[str]}</ListGroup.Item>
                        <ListGroup.Item><img alt="Slika" src={`https://www.thecocktaildb.com/images/ingredients/${item[str]}.png`}/></ListGroup.Item>
                    </ListGroup>}
                 </Card>
                </>
            );
        }

        return result;
    }

    return (
        <> {data ? 
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover className='shadow-lg'>
                            {data.map((item) => (
                                <tbody>
                                <tr>
                                    <th style={{backgroundColor: '#ffbf80'}}>Name</th>
                                    <td><b>{item.strDrink}</b></td>
                                </tr>
                                <tr>
                                    <th style={{backgroundColor: '#ffbf80'}}>Alcoholic</th>
                                    <td>{item.strAlcoholic}</td>
                                </tr>
                                <tr>
                                    <th style={{backgroundColor: '#ffbf80'}}>Category</th>
                                    <td>{item.strCategory}</td>
                                </tr>
                                <tr>
                                    <th style={{backgroundColor: '#ffbf80', display: 'flex', height: '500px', alignItems: 'center', justifyContent: 'center'}}>Ingredients</th>
                                    <td>{getImages(item)}</td>
                                </tr>
                                <tr>
                                    <th style={{backgroundColor: '#ffbf80'}}>Instructions</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th style={{backgroundColor: '#ffbf80'}}>Glasses</th>
                                    <td>{item.strGlass}</td>
                                </tr>
                                <tr>
                                    <th style={{backgroundColor: '#ffbf80', display: 'flex', height: '500px', alignItems: 'center', justifyContent: 'center'}}>Image</th>
                                    <td><img className='shadow' alt='Slika' src={`${item.strDrinkThumb}`} style={{height: '13%', width: '33%'}}/></td>
                                </tr>
                            </tbody>
                            ))}
                        </Table>
                    </Col>
                </Row>
            </Container>
        : <p>{errorMsg}</p>}
        
        </>
      );

    // return (
    //     <>
    //         {data ? 
    //         <div>
    //             <ul>
    //                 {data.map((item) => (
    //                     <li key={item.idDrink}>
    //                         <div>
    //                         <h1>{item.strDrink}</h1>
    //                         <p>{item.strAlcoholic}</p>
    //                         <p>{item.strCategory}</p>
    //                         <h2>Ingredients:</h2>

    //                         {getImages(item)}

                            // <Form.Select onChange={changeHandler}>
                            //     <option value={item.strInstructions}>English</option>
                            //     <option value={item.strInstructionsES}>Spanish</option>
                            //     <option value={item.strInstructionsDE}>German</option>
                            //     <option value={item.strInstructionsFR}>French</option>
                            //     <option value={item.strInstructionsIT}>Italian</option>
                            // </Form.Select>
                            // <p>{instructions}</p>
    //                         <p>{item.strGlass}</p>
    //                         <img alt='Slika' src={`${item.strDrinkThumb}`} style={{width: '33%', objectFit: 'cover'}}/>
    //                         <br></br><br></br>
    //                         <Button onClick={() => clickHandler(item)}>{postoji ? 'Add to favorites' : 'Remove from favorites'}</Button>
    //                         </div>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div> : <p>{errorMsg}</p>       
    //         }
    //     </>
    // );
};

export default CoctailDetailPage;