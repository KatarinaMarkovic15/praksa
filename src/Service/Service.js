import axios from 'axios';

export const getCategories = () => {
    return axios.get("https://thecocktaildb.com/api/json/v1/1/list.php?c=list");
};

export const getGlasses = () => {
    return axios.get("https://thecocktaildb.com/api/json/v1/1/list.php?g=list");
};

export const getIngredients = () => {
    return axios.get("https://thecocktaildb.com/api/json/v1/1/list.php?i=list");
};

export const getAlcoholic = () => {
    return axios.get("https://thecocktaildb.com/api/json/v1/1/list.php?a=list"); 
};

export const getLookup = (i) => {
    return axios.get("https://thecocktaildb.com/api/json/v1/1/lookup.php", {
        params: { i }
    });
};

export const getFilter = (params) => {
    return axios.get("https://thecocktaildb.com/api/json/v1/1//filter.php", {params});
};