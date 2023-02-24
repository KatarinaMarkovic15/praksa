import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';

import { useState, useEffect } from 'react';

import {getCategories, getGlasses, getIngredients, getAlcoholic, getFilter } from '../Service/Service';

import CoctailsList from '../components/CoctailsList';

const selects = {
    none: 'none',
    g: 'g',
    c: 'c',
    i: 'i',
    a: 'a'
}

const FilterPage = () => {
    const [glasses, setGlasses] = useState([]);
    const [errorMsgGlasses, setErrorMsgGlasses] = useState('');
    const [categories, setCategories] = useState([]);
    const [errorMsgCategories, setErrorMsgCategories] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [errorMsgIngredients, setErrorMsgIngredients] = useState('');
    const [alcoholic, setAlcoholic] = useState([]);
    const [errorMsgAlcoholic, setErrorMsgAlcoholic] = useState('');

    const [coctails, setCoctails] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const [choosedSelect, setChoosedSelect] = useState(selects.none);
    const [filters, setFilters] = useState({g: '', c: '', i: '', a: ''});

    const [colorOnChangeGlass, setColorOnChangeGlass] = useState('#e6e6e6');
    const [colorOnChangeCategory, setColorOnChangeCategory] = useState('#e6e6e6');
    const [colorOnChangeIngredient, setColorOnChangeIngredient] = useState('#e6e6e6');
    const [colorOnChangeAlcoholic, setColorOnChangeAlcoholic] = useState('#e6e6e6');

    useEffect(() => {
        fetchGlasses();
        fetchCategory();
        fetchIngredients();
        fetchAlcoholic();
    }, []);

    const fetchGlasses = () => {
        setErrorMsgGlasses('');

        getGlasses()
        .then(response => {
            if(!response.data.drinks) {
                setGlasses(response.data.drinks);
                setErrorMsgGlasses('An error ocured. The list of glasses is empty. Check the HTTP get request!');
                return;
            }

            setGlasses(response.data.drinks);
            setErrorMsgGlasses('');
        });
    };

    const fetchCategory = () => {
        setErrorMsgCategories('');

        getCategories()
        .then(response => {
            if(!response.data.drinks) {
                setCategories(response.data.drinks);
                setErrorMsgCategories('An error ocured. The list of categories is empty. Check the HTTP get request!');
                
                return;
            }

            setCategories(response.data.drinks);
            setErrorMsgCategories('');
        });
    };

    const fetchIngredients = () => {
        setErrorMsgIngredients('');

        getIngredients()
        .then(response => {
            if(!response.data.drinks) {
                setIngredients(response.data.drinks);
                setErrorMsgIngredients('An error ocured. The list of ingredients is empty. Check the HTTP get request!');
                
                return;
            }

            setIngredients(response.data.drinks);
            setErrorMsgIngredients('');
        });
    };

    const fetchAlcoholic = () => {
        setErrorMsgAlcoholic('');

        getAlcoholic()
        .then(response => {
            if(!response.data.drinks) {
                setAlcoholic(response.data.drinks);
                setErrorMsgAlcoholic('An error ocured. The list is empty. Check the HTTP get request!');
                return;
            }

            setAlcoholic(response.data.drinks);
            setErrorMsgAlcoholic('');
        });
    };

    const onChangeSelect = (event, option) => {
            if(option === selects.a || option === selects.g || option === selects.i || option === selects.c) {
                let copyFilters = {...filters};
                copyFilters[option] = event.target.value;
                setFilters(copyFilters);  
                
                let params = {};

                if(option === selects.g) {
                    params.g = copyFilters.g;

                    setColorOnChangeGlass('#ffbf80');
                } else if(option === selects.c) {
                    params.c = copyFilters.c;

                    setColorOnChangeCategory('#ffbf80');
                } else if(option === selects.i) {
                    params.i = copyFilters.i;

                    setColorOnChangeIngredient('#ffbf80');
                } else if(option === selects.a) {
                    params.a = copyFilters.a;

                    setColorOnChangeAlcoholic('#ffbf80');
                }

                

                getFilter(params)
                .then(response => {
                    if(!response.data.drinks) {
                        setCoctails(response.data.drinks);
                        setErrorMsg('You need to select one option!');               
                        return;
                    }
            
                    setCoctails(response.data.drinks);
                    setErrorMsg('');
                });
                
                if (event.target.value === '' ) {
                    setChoosedSelect(option === choosedSelect? selects.none: option);
                } else {
                    setChoosedSelect(option);
                }
            } else {
                setChoosedSelect(selects.none);
            }
    };

    if(!glasses) {
        return <p>{errorMsgGlasses}</p>
    } else if(!categories) {
        return  <p>{errorMsgCategories}</p>
    } else if(!ingredients) {
        return <p>{errorMsgIngredients}</p> 
    } else if(!alcoholic) {
        return <p>{errorMsgAlcoholic}</p>
    }
    
    return (
        <>
            <h1>Filter cocktails by:</h1>
            <br></br>
            <Table striped bordered hover>
               <thead>
                   <tr>
                       <th>Glass</th>
                       <th>Category</th>
                       <th>Ingridient</th>
                       <th>Alcoholic</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>
                            <Form.Select style={{backgroundColor: `${colorOnChangeGlass}`}} onChange={(event) => onChangeSelect(event, selects.g)}
                           disabled={choosedSelect !== selects.none && choosedSelect !== selects.g}>
                            <option value={''}>-----Select-----</option>
                             {glasses.map((item) => (
                                 <option key={item.strGlass}>{item.strGlass}</option>
                             ))}
                            </Form.Select>                          
                       </td>
                       <td>
                           <Form.Select style={{backgroundColor: `${colorOnChangeCategory}`}} onChange={(event) => onChangeSelect(event, selects.c)}
                           disabled={choosedSelect !== selects.none && choosedSelect !== selects.c}>
                            <option value={''}>-----Select-----</option>
                            {categories.map((item) => (
                            <option key={item.strCategory}>{item.strCategory}</option>
                            ))}
                           </Form.Select>   
                       </td>
                       <td>
                           <Form.Select style={{backgroundColor: `${colorOnChangeIngredient}`}} onChange={(event) => onChangeSelect(event, selects.i)}
                           disabled={choosedSelect !== selects.none && choosedSelect !== selects.i}>
                           <option value={''}>-----Select-----</option>
                            {ingredients.map((item) => (
                                <option key={item.strIngredient1}>{item.strIngredient1}</option>
                            ))}
                           </Form.Select>
                       </td>
                       <td>
                           <Form.Select style={{backgroundColor: `${colorOnChangeAlcoholic}`}} onChange={(event) => onChangeSelect(event, selects.a)}
                           disabled={choosedSelect !== selects.none && choosedSelect !== selects.a}>
                           <option value={''}>-----Select-----</option>
                            {alcoholic.map((item) => (
                                <option key={item.strAlcoholic}>{item.strAlcoholic}</option>
                            ))}
                           </Form.Select>
                       </td>
                   </tr>
               </tbody>
            </Table>
           {coctails ? <CoctailsList allCoctails={coctails}/> : <p>{errorMsg}</p>} 
           
        </>);    
};

export default FilterPage;