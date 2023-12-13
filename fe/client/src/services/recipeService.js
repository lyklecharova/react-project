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

    const result = await request.get(`${baseUrl}`);
    function compareByTime(a, b) {

        return b._createdOn - a._createdOn;
    }
    const latestRecipe = result.sort(compareByTime);
    
    const sortedRecipe = latestRecipe.splice(0, 3)
    return sortedRecipe
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
