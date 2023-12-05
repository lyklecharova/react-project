import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as recipeService from '../../services/recipeService';

import styles from "./CreateRecipe.module.css";

export const CreateRecipe = () => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState({
    image: '',
    title: '',
    description: '',
    ingredients: '',
  });

  const onChangeHanlder = (e) => {
    const { name, value } = e.target;
    setRecipes((recipe) => ({
      ...recipe,
      [name]:
        value
    }));
  };
  const createRecipeSubmitHandler = async (e) => {
    e.preventDefault();

    const recipeData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await recipeService.create(recipeData);

      navigate('/dashboard');
    } catch (error) {
      // Error notification
      console.log(error);
    }

  };

  return (
    <div className={styles["container-create-recipe"]}>
      <form onSubmit={createRecipeSubmitHandler} className={styles["create-recipe-form"]} method="post" action="">
        <div>
          <label htmlFor="image" className={styles["create-recipe-label"]}>
            Image
          </label>
          <input
            type="text"
            className={styles["create-recipe-input"]}
            name="image"
            value={recipes.image}
            onChange={onChangeHanlder}
            placeholder="Upload image"

          />
        </div>
        <div>
          <label htmlFor="title" className={styles["create-recipe-label"]}>
            Title
          </label>
          <input
            type="text"
            name="title"
            value={recipes.title}
            onChange={onChangeHanlder}
            placeholder="Enter recipe title"
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
            value={recipes.description}
            onChange={onChangeHanlder}
            rows="4"
            cols="50"
            placeholder="Enter recipe description"
            className={styles["create-recipe-textarea"]}
          />
        </div>

        <div>
          <label
            htmlFor="ingredients"
            className={styles["create-recipe-label"]}
          >
            Ingredients
          </label>
          <textarea
            name="ingredients"
            value={recipes.ingredients}
            onChange={onChangeHanlder}
            rows="4"
            cols="50"
            placeholder="Enter recipe ingredients"
            className={styles["create-recipe-textarea"]}
          />
        </div>

        <button className={styles["create-recipe-button"]}>Create</button>
      </form>
    </div>
  );
};
