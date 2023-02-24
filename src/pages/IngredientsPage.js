import React, { useEffect, useState } from 'react';

import IngredientsList from '../components/IngredientsList';
import { getIngredients } from '../Service/Service';

function IngredientsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = () => {
        setLoading(true);
        setErrorMsg('');

        getIngredients()
        .then(response => {
            if(!response.data.drinks) {
                setData(response.data.drinks);
                setLoading(false);
                setErrorMsg('An error ocured. The list of ingredients is empty. Check the HTTP get request!');
                
                return;
            }

            setData(response.data.drinks);
            setLoading(false);
            setErrorMsg('');
        });
    }

    if(!loading) {
        return (
            <>
                { data ? <IngredientsList ingredients={data}/> : <p>{errorMsg}</p> }      
            </>
        );
    } else {
        return (
            <>
                <p>Loading...</p>
            </>
        );
    }

};

export default IngredientsPage;