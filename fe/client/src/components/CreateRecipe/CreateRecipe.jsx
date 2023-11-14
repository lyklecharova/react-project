import React, { useState } from 'react';

import styles from "./CreateRecipe.module.css";
export const CreateRecipe = () => {
  const [recipes, setRecipes] = useState({
    image: '',
    title: '',
    description: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRecipes((recipes) => ({
       ...recipes, 
       [name]: value 
      }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Тук може да добавите логика за обработка на формата
    console.log(recipes);
  }; 
  return (
    <div className={styles["container-create-recipe"]}>
      <form onSubmit={onSubmitHandler}  className={styles["create-recipe-form"]} method="post" action="">
        <div>
          <label htmlFor="image" className={styles["create-recipe-label"]}>
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            className={styles["create-recipe-input"]}
            name = "image"
            value={recipes.image}
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
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
