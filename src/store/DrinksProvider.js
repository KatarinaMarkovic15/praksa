import { useState } from 'react';
import { useSelector } from 'react-redux';
import DrinksContext from './drinks-context';

const DrinksProvider = (props) => {
    const [drinksItems, setDrinksItems] = useState(0);

    const drinks = useSelector(state => state.drinks);

    const setItemsHandler = () => {
        const brojac = drinks.length;

        setDrinksItems(brojac);

        return drinksItems;
    };

    const drinksContext = {  
        setItems: setItemsHandler
    };  

    return <DrinksContext.Provider value={drinksContext}>
        {props.children}
    </DrinksContext.Provider>
};

export default DrinksProvider;