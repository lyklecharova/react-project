import { useEffect, useState } from 'react';
import * as recipeService from '../../services/recipeService';
import styles from "./Dashboard.module.css";
import { DashboardItem } from './DashboardItem/DashboardItem';


import { SearchBar } from '../Search/SearchBar';
import { paginationIndex } from '../../utils/paginationIndex';


export const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [foundRecipes, setFoundRecipes] = useState([]);
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const { itemsPerPage } = paginationIndex();

  useEffect(() => {
    recipeService.getAll()
      .then(result => {
        setRecipes(result);
        const { indexOfFirstRecipe, indexOfLastRecipe } = paginationIndex(1);
        setCurrentRecipes(result.slice(indexOfFirstRecipe, indexOfLastRecipe))
      })
  }, []);

  // Промяна на страницата
  const paginate = (pageNumber) => {
    const paginatedRecipe = foundRecipes.length === 0 ? recipes : foundRecipes;
    const { indexOfFirstRecipe, indexOfLastRecipe } = paginationIndex(pageNumber)
    setCurrentRecipes(paginatedRecipe.slice(indexOfFirstRecipe, indexOfLastRecipe))
  };

  const onSearchRecipe = (foundRecipes) => {
    setFoundRecipes(foundRecipes);
    const { indexOfFirstRecipe, indexOfLastRecipe } = paginationIndex(1);
    setCurrentRecipes(foundRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe))

  }
  return (
    <div className={styles["container-dashboard"]}>
      <SearchBar onSearchRecipe={onSearchRecipe} recipes={recipes} />
      <div className={styles["container-dashboard-list"]}>
        {currentRecipes.map(recipe => (
          <DashboardItem key={recipe._id} {...recipe} />
        ))}

        {currentRecipes.length === 0 && (
          <div>
            <h2 className={styles['recipe-error']}>Can not find recipe yet!</h2>
          </div>
        )}

        {currentRecipes.length !== 0 && (
          <div className={styles['pagination']}>

            {Array.from({ length: Math.ceil((foundRecipes.length !== 0 ? foundRecipes.length : recipes.length) / itemsPerPage) }, (_, index) => (
              // Първият параметър, представен с _, се игнорира, тъй като не ни е необходим.
              // Вторият параметър, index, представлява индекса на текущия елемент в масива, който използваме като ключ за бутона.
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>

        )}
      </div>
    </div>
  );
};


