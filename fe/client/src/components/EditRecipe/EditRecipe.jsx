import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import styles from "./EditRecipe.module.css";

export const EditRecipe = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({
    image: '',
    title: '',
    description: '',
    ingredients: '',
  });

  // Mount
  useEffect(() => {
    recipeService.getOne(recipeId)
      .then(result => {
        setRecipe(result);
      });
  }, [recipeId])

  const editRecipeSubmitHandler = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await recipeService.edit(recipeId, values);
      navigate('/dashboard');
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  const onChange = (e) => {
    setRecipe(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={styles["container-edit-recipe"]}>
      <form onSubmit={editRecipeSubmitHandler} className={styles["edit-recipe-form"]} method="post" action="">
        <div>
          <label htmlFor="image" className={styles["edit-recipe-label"]}>
            Image
          </label>
          <input
            type="text"
            className={styles["edit-recipe-input"]}
            name="image"
            value={recipe.image}
            onChange={onChange}
            placeholder='Upload image'
          />
        </div>
        <div>
          <label htmlFor="title" className={styles["edit-recipe-label"]}>
            Title
          </label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={onChange}
            placeholder='Enter recipe title'
            className={styles["edit-recipe-input"]}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className={styles["edit-recipe-label"]}
          >
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className={styles["edit-recipe-textarea"]}
            value={recipe.description}
            onChange={onChange}
            placeholder='Enter recipe description'
          />
        </div>

        <div>
          <label
            htmlFor="ingredients"
            className={styles["edit-recipe-label"]}
          >
            Ingredients
          </label>
          <textarea
            name="ingredients"
            rows="4"
            cols="50"
            className={styles["edit-recipe-textarea"]}
            value={recipe.ingredients}
            onChange={onChange}
            placeholder='Enter recipe ingredients'
          />
        </div>

        
        <button className={styles["edit-recipe-button"]}>Edit</button>
      </form>
    </div>
  );
};
