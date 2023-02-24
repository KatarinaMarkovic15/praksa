import React, { useEffect, useState } from 'react';

import CategoriesList from '../components/CategoriesList';
import { getCategories } from '../Service/Service';

function CategoriesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = () => {
        setLoading(true);
        setErrorMsg('');

        getCategories()
        .then(response => {
            if(!response.data.drinks) {
                setData(response.data.drinks);
                setLoading(false);
                setErrorMsg('An error ocured. The list of categories is empty. Check the HTTP get request!');
                
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
                { data ? <CategoriesList categories={data}/> : <p>{errorMsg}</p> }      
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

export default CategoriesPage;
