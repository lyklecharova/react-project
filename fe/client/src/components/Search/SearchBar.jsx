import { useFormHooks } from '../../hooks/useFormHook';

import styles from "./SearchBar.module.css";

export const SearchBar = ({
  onSearchRecipe,
  recipes,
}) => {
  const onSubmitSearch = ({ search }) => {
    const foundRecipes = searchRecipe(search)
    onSearchRecipe(foundRecipes);
  }
  const onChangeHandler = (e) => {
    onChange(e);
    const search = e.target.value;
    const foundRecipes = searchRecipe(search)
    onSearchRecipe(foundRecipes);
  }
  const searchRecipe = (searchRecipeStr) => {
    const foundRecipes = recipes.filter(recipe => recipe.title.toLocaleLowerCase().includes(searchRecipeStr.toLocaleLowerCase()));
    return foundRecipes;
  }
  const { values, onChange, onSubmit } = useFormHooks(onSubmitSearch, {
    search: "",
  });
  return (
    
    <div className={styles['search-container']}>
      
        <form className={styles['search-form']} onSubmit={onSubmit}>
          <input
            name='search'
            type="search"
            placeholder="Search"
            className={styles['search-input']}
            aria-label="Search"
            onChange={onChangeHandler}
            value={values.search}
          />
          <button className={styles['search-button']} type='submit' variant="outline-success">Search</button>
        </form>
    
    </div>
  );
};


