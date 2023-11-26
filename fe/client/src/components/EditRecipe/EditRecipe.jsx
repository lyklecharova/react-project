import React, { useState } from 'react';

import styles from "./EditRecipe.module.css";
export const EditRecipe = () => {

  const [recipes, setRecipes] = useState({
    image: '',
    title: '',
    description: '',
    
  });
  const onChangeHanlder = (e) => {
    const { name, value } = e.target;
    setRecipes((recipe) => ({ 
      ...recipe, 
      [name]: 
      value }));
  }; 
  const onSubmitHanlder = (e) => {
    e.preventDefault();
    // Тук може да добавите логика за обработка на формата
    console.log(recipes);
  };
  return (
    <div className={styles["container-edit-recipe"]}>
      <form onSubmit={onSubmitHanlder} className={styles["edit-recipe-form"]} method="post" action="">
        <div>
          <label htmlFor="image" className={styles["edit-recipe-label"]}>
            Image
          </label>
          <input
            type="text"
            className={styles["edit-recipe-input"]}
            name="image"
            value={recipes.image}
            onChange={onChangeHanlder}
          />
        </div>
        <div>
          <label htmlFor="title" className={styles["edit-recipe-label"]}>
            Title
          </label>
          <input
            type="text"
            name="title"
            value={recipes.title}
            onChange={onChangeHanlder}

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
            value={recipes.description}
            onChange={onChangeHanlder}
          />
        </div>

        <button className={styles["edit-recipe-button"]}>Edit</button>
      </form>
    </div>
  );
};
