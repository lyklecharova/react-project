import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export const getAll = async() =>{
    const result = await request.get( baseUrl);
    return Object.values(result);
};

export const create = async (recipeData) =>{
    const result = await request.post(baseUrl, recipeData);
   
    return result;
};