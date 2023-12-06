import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (recipeId, text) => {
    const newComments = await request.post(baseUrl, {
        recipeId,
        text,
    });
    return newComments;
};

export const delComment = async (commentId) => {

    const token = localStorage.getItem("accessToken");
    const deletedComment = await fetch(`${baseUrl}/${commentId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
        },
    });

    if (!deletedComment.ok) {
        const error = await deletedComment.json();
        throw new Error(`Error deleting comment: ${error.message}`);
    }

    return deletedComment.json();
};

