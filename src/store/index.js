import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { drinks: [], postoji: true };

const drinksSlice = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
        getItem(state){
            state.drinks = JSON.parse(localStorage.getItem('FAVORITE_COCTAILS')); 
        },
        setItem(state, action) {
            let item = action.payload;

            if(state.drinks.some(e => e.idDrink === item.idDrink)) {
                state.drinks = state.drinks.filter(e => e.idDrink !== item.idDrink);
                localStorage.setItem('FAVORITE_COCTAILS', JSON.stringify(state.drinks));

                
                state.postoji = true;
            } else {
                state.drinks.push(item);
                localStorage.setItem('FAVORITE_COCTAILS', JSON.stringify(state.drinks));

               
                state.postoji = false;
            }
        },
        promeni(state, action) {
            const trenutni = action.payload;

            if(state.drinks.some(e => e.idDrink === trenutni)) {
                state.postoji = false;
            } else {
                state.postoji = true;
            }

        }
    }
});


const store = configureStore({
    reducer: drinksSlice.reducer
});

export const drinksActions = drinksSlice.actions;

export default store;