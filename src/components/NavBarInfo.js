import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';

import DrinksContext from '../store/drinks-context';

const NavBarInfo = () => {
    const drinksCtx = useContext(DrinksContext);    

    drinksCtx.setItems();

    const numberOfDrinksItems = drinksCtx.setItems();
    
    return (
    <>
        <p style={{color: 'white', margin: '3px'}}>Favorite cocktails:&nbsp;&nbsp;</p>
        <Badge bg="warning">{numberOfDrinksItems}</Badge>
    </>
    ); 
};

export default NavBarInfo;