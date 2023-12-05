import * as request from '../lib/request';


const baseUrl = 'http://localhost:3030/data/recipes';

export const getAll = async () => {
    try {
        const result = await request.get(baseUrl);
        return result; // return arrays of objects 
    } catch (err) {
        console.error('Error fetching data:', err);
        throw err;
    }

};

export const getOne = async (recipeId) => {
    try {
        const result = await request.get(`${baseUrl}/${recipeId}`,);
        return result;
    } catch (err) {
        console.error('Error fetching data:', err);
        throw err;
    }

};

export const getLatestRecipes = async () => {
    try {
        const query = new URLSearchParams({
            offset: 0,
            pageSize: 3,
        });

        const result = await request.get(`${baseUrl}?${query}`);
        return result;
    } catch (err) {
        console.error('Error fetching latest recipes:', err);
        throw err;
    }

}

export const create = async (recipeData) => {
    try {
        const result = await request.post(baseUrl, recipeData);

        return result;
    } catch (err) {
        console.error('Error creating recipe:', err);
        throw err;
    }

};

export const edit = async (recipeId, recipeData) => {
    try {
        const result = await request.put(`${baseUrl}/${recipeId}`, recipeData);

        return result;
    } catch (err) {
        console.error('Error editing recipe:', err);
        throw err;
    }

};

export const del = async (recipeId) => {
    try {
        request.del(`${baseUrl}/${recipeId}`);
    } catch (err) {
        console.error('Error deleting recipe:', err);
        throw err;
    }
}