import {useNavigate} from 'react-router-dom';

import * as recipeService from '../../services/recipeService';

import styles from "./CreateRecipe.module.css";
export const CreateRecipe = () => {
  const navigate = useNavigate();

  const createRecipeSubmitHandler = async(e) =>{
    e.preventDefault();

    const recipeData = Object.fromEntries(new FormData(e.currentTarget));
    try{
      await recipeService.create(recipeData); 

      navigate('/recipes');
    }catch(error){
      // Error notification
      console.log(error);
    }

  };

  return (
    <div className={styles["container-create-recipe"]}>
      <form onSubmit={createRecipeSubmitHandler}  className={styles["create-recipe-form"]} method="post" action="">
        <div>
          <label htmlFor="image" className={styles["create-recipe-label"]}>
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            className={styles["create-recipe-input"]}
            name = "image"
            
          />
        </div>
        <div>
          <label htmlFor="title" className={styles["create-recipe-label"]}>
            Title
          </label>
          <input
            type="text"
            name="title"
            
            className={styles["create-recipe-input"]}

          />
        </div>

        <div>
          <label
            htmlFor="description"
            className={styles["create-recipe-label"]}
          >
            Description
          </label>
          <textarea
            name="description"
            
            rows="4"
            cols="50"
            className={styles["create-recipe-textarea"]}
          />
        </div>

        <button className={styles["create-recipe-button"]}>Create</button>
      </form>
    </div>
  );
};
