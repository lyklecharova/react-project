export const paginationIndex = (pageNumber, itemsPerPage = 4) => {

    const indexOfLastRecipe = pageNumber * itemsPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
    return {
        indexOfLastRecipe,
        indexOfFirstRecipe,
        itemsPerPage,
    }
}