import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';

import styles from './LatestRecipe.module.css';

export const LatestRecipe = () => {
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {
    recipeService.getLatestRecipes()
      .then(result => {
        setLatestRecipes(result);
      })
      .catch(error => {
        console.error('Error fetching latest recipes:', error);
      });
  }, []);

  return (
    <div className={styles['content-about']}>
      <h2 className={styles['about-title']}>Latest Recipe</h2>

      <ul className={styles['about-description']} role='list'>
        {latestRecipes.map(recipe => (
          <li key={recipe._id}>
            <Link className={styles['recipe-latest-link']} to={'/dashboard'}>
              <img className={styles['latest-recipe-img']} src={recipe.image} alt={recipe.title} />
              <h3 className={styles['recipe-latest-title']}>{recipe.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

