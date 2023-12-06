import * as request from '../lib/request';


const baseUrl = 'http://localhost:3030/data/recipes';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result; // return arrays of objects 
};

export const getOne = async (recipeId) => {
    const result = await request.get(`${baseUrl}/${recipeId}`,);
    return result;
};

export const getLatestRecipes = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });
    const result = await request.get(`${baseUrl}?${query}`);

}

export const create = async (recipeData) => {
    const result = await request.post(baseUrl, recipeData);
    return result;
};

export const edit = async (recipeId, recipeData) => {
    const result = await request.put(`${baseUrl}/${recipeId}`, recipeData);
    return result;
};

export const del = async (recipeId) => {
    request.del(`${baseUrl}/${recipeId}`);
}