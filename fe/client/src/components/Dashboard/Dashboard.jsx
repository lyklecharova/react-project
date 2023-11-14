import { useEffect, useState } from 'react';
import * as recipeService from '../../services/recipeService';
import styles from "./Dashboard.module.css";
import { DashboardItem } from './DashboardItem/DashboardItem';

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
          <DashboardItem key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};
