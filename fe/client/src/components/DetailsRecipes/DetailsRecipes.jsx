import { Link, useParams } from 'react-router-dom';
import styles from './DetailsRecipes.module.css';
import { useEffect, useState } from 'react';

import * as recipeService from '../../services/recipeService'
export const DetailsRecipes = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    recipeService.getOne(recipeId)
      .then(recipe => setRecipe(recipe));
  }, [recipeId]);

  return (
    <div className={styles['container-recipe-details']}>
      <div className={styles['content-recipe-details']}>
        <div className={styles['recipe-details-information']}>
          <div className={styles['recipe-details-info']}>
            <img className={styles["dashboard-img"]} src={recipe.image} alt={recipe.title} />

            <h2 className={styles['recipe-details-value']}>{recipe.title}</h2>
          </div>
          <div className={styles['recipe-details-info']}>

            <ul className={styles['recipe-details-list']}>
              <li>{recipe.ingredients}</li>
            </ul>

            <h2 className={styles['recipe-details-value']}>{recipe.description}</h2>
          </div>
        </div>
        <div className={styles['raw']}>
          <Link to={`/recipes/details`} className={styles['link-style']}>
            Edit Recipe
          </Link>
          <Link to={`/recipes/details`} className={styles['link-style']}>
            Delete Recipe
          </Link>
          <Link to={`/recipes/details`} className={styles['link-style']}>
            Add Comments
          </Link>
        </div>
      </div>
    </div>
  );
};
