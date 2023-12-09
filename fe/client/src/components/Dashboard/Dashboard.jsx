import { useEffect, useState } from 'react';
import * as recipeService from '../../services/recipeService';
import styles from "./Dashboard.module.css";
import { DashboardItem } from './DashboardItem/DashboardItem';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    recipeService.getAll()
      .then(result => setRecipes(result))
  }, []);

  // Разделяне на списъка с рецепти на страници
  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Промяна на страницата
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles["container-dashboard"]}>
      <div className={styles["container-dashboard-list"]}>
        {currentRecipes.map(recipe => (
          <DashboardItem key={recipe._id} {...recipe} />
        ))}

        {recipes.length === 0 && (
          <div>
            <h2 className={styles['recipe-error']}>Can not find recipe yet!</h2>
            <span className={styles['error']}>
              <Link to={'/'}>Oops, back to the home</Link>
            </span>
          </div>
        )}

        <div className={styles['pagination']}>
          {Array.from({ length: Math.ceil(recipes.length / itemsPerPage) }, (_, index) => (
            // Първият параметър, представен с _, се игнорира, тъй като не ни е необходим.
            // Вторият параметър, index, представлява индекса на текущия елемент в масива, който използваме като ключ за бутона.
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

