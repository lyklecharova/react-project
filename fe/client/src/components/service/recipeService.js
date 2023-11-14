const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (recipeData) =>{
    const response = await fetch(`${baseUrl}/recipes`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipeData)
    });
    const result = response.json();

    return result;
};