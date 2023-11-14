import { Link } from 'react-router-dom';
import styles from './DetailsRecipes.module.css';

export const DetailsRecipes = ({ 
    title, 
    description 
}) => {
    
  return (
    <div className={styles['container-recipe-details']}>
      <div className={styles['content-recipe-details']}>
        <div className={styles['recipe-details-information']}>
          <div className={styles['recipe-details-info']}>
           
            <h2 className={styles['recipe-details-value']}>{title}</h2>
          </div>
          <div className={styles['recipe-details-info']}>
           
            <h2 className={styles['recipe-details-value']}>{description}</h2>
          </div>
        </div>
        <div className={styles['raw']}>
          <Link to={`/recipes/details`} className={styles['link-style']}>
            Edit Recipe
          </Link>
          <Link to={`/recipes/details`} className={styles['link-style']}>
            Delete Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};
