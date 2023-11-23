import { useEffect, useState } from 'react';
import * as recipeService from '../../services/recipeService';
import styles from "./Dashboard.module.css";
import { DashboardItem } from './DashboardItem/DashboardItem';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll()
      .then(result => setRecipes(result))
  }, []);

  return (
    <div className={styles["container-dashboard"]}>
      <div className={styles["container-dashboard-list"]}>
        {recipes.map(recipe => (
          <DashboardItem key={recipe._id}{...recipe} />
        ))}

        {recipes.length === 0 && (
          <div>
          <h2 className={styles['recipe-error']}>Can not find recipe yet!</h2>
          <span className={styles['error']}>
          <Link to={'/'}>Oops, back to the home</Link></span>
          </div>
        )}

      </div>
    </div>
  );
};
