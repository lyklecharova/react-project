import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';

import styles from './CurrentRecipe.module.css';

export const CurrentRecipe = ({
  _id
}) => {
  const [currentRecipes, setCurrentRecipes] = useState([]);

  useEffect(() => {
    recipeService.getCurrentRecipes()
      .then(result => {
        setCurrentRecipes(result);
      })
      .catch(error => {
        console.error('Error fetching latest recipes:', error);
      });
  }, []);

  return (
    <div className={styles['content-about']}>
      <h2 className={styles['about-title']}>Current Recipe</h2>
      <ul className={styles['about-description']} role='list'>

        {currentRecipes.map(recipe => (
          <li key={recipe._id}>
            
            {/* <Link className={styles['recipe-latest-link']} to={`/recipes/${recipe._id}`}>
              <button className={styles['more-information']}>See more</button>
            </Link> */}

            <Link to={`/recipes/${recipe._id}`} className={styles['recipe-latest-link']}>
              <img className={styles['latest-recipe-img']} src={recipe.image} alt={recipe.title} />
              <h3 className={styles['recipe-latest-title']}>{recipe.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


