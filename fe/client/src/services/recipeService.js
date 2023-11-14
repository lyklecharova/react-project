import {request} from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export const getAll = async() =>{
    const result = await request('GET', baseUrl);
    return Object.values(result);
};

export const create = async (recipeData) =>{
    const response = await fetch(baseUrl,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipeData)
    });
    const result = response.json();

    return result;
};