import React, { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';

import GlassesList from '../components/GlassesList';
import { getGlasses } from '../Service/Service';

function GlassesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = () => {
        setLoading(true);
        setErrorMsg('');

        getGlasses()
        .then(response => {
            if(!response.data.drinks) {
                setData(response.data.drinks);
                setLoading(false);
                setErrorMsg('An error ocured. The list of glasses is empty. Check the HTTP get request!');
                
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
                { data ? <GlassesList glasses={data}/> : <Alert variant='danger'>{errorMsg}</Alert> } 
            </>
        );
    } else {
        return (
            <>
                <Spinner animation="border" />
            </>
        );
    }
}
export default GlassesPage;