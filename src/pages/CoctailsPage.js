import { useSelector } from 'react-redux';

import FavoriteCoctailsList from '../components/FavoriteCoctailsList';

const CoctailsPage = () => {
    const drinks = useSelector(state => state.drinks);

    return (
        <>
            <h2>Here you can see your favorite cocktails:</h2>
            <FavoriteCoctailsList drinks={drinks} />
        </>
    );
};

export default CoctailsPage;