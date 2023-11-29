import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useReducer, useState, useMemo } from 'react';

import styles from './DetailsRecipes.module.css';
import * as recipeService from '../../services/recipeService';
import * as recipeCommentsService from '../..//services/recipeCommentsService'
import { pathToUrl } from '../../utils/pathUtils';
import { Path } from '../../paths';
import { reducer } from './commentReducer';
import { AuthContext } from '../../contexts/authContext'
import { useFormHooks } from '../../hooks/useFormHook';

export const DetailsRecipes = () => {
  const navigate = useNavigate();
  const { email, userId } = useContext(AuthContext);
  const [recipe, setRecipe] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const { recipeId } = useParams();

  useEffect(() => {
    recipeService.getOne(recipeId)
      .then(setRecipe);

    recipeCommentsService.getAll(recipeId)
      .then((result) => {
        dispatch({
          type: 'GET_ALL_COMMENTS',
          payload: result,
        });
      });

  }, [recipeId]);


  const addCommentHandler = async (values) => {
    const newComment = await recipeCommentsService.create(
      recipeId,
      values.comment
    );
    newComment.owner = { email };
    dispatch({
      type: 'ADD_COMMENT',
      payload: newComment
    })
  };

  const deleteButtonClickHandler= async () =>{
    const hasConfirmed = confirm(`Are you sure you want to delete ${recipe.title}?`);

    if(hasConfirmed){
      await recipeService.del(recipeId);

      navigate('/dashboard')
    }
  };

  // TODO: temp solution for form reinitialization
  const initialValues = useMemo(() => ({
    // useMemo -> Позволява да изпълни функция, чийто отговор ще бъде запазен като референция
    comment: '',
  }), []) // [] -> dependency array
  
  const { values, onChange, onSubmit } = useFormHooks(addCommentHandler, initialValues);

  // if(Math.random() < 0.5){
  //   throw new Error('Recipe details error!')
  // }

  return (
    <div className={styles['container-recipe-details']}>
      <div className={styles['content-recipe-details']}>
        <div className={styles['recipe-details-information']}>
          <div className={styles['recipe-details-info']}>
            <img className={styles["dashboard-img-details"]} src={recipe.image} alt={recipe.title} />

            <h2 className={styles['recipe-details-value']}>{recipe.title}</h2>
          </div>
          <div className={styles['recipe-details-info']}>

            <ul className={styles['recipe-details-list']} role='list'>
              <li>{recipe.ingredients}</li>
            </ul>

            <p className={styles['recipe-details-value']}>{recipe.description}</p>
          </div>
          {userId === recipe._ownerId && (
            <div className={styles['raw']}>
              <Link to={pathToUrl(Path.RecipeEdit, { recipeId })} className={styles['link-style']}>
                Edit Recipe
              </Link>
              {/* <Link to={pathToUrl(Path.RecipeDelete, { recipeId })} className={styles['link-style']}>
                Delete Recipe
              </Link> */}
              <button className={styles['link-style']} onClick={deleteButtonClickHandler}>Delete Recipe</button>
            </div>

          )}
        </div>

      </div>

      <div className={styles['comments-info']}>
        <div className={styles['comments-container']}>
          <h3>Comments:</h3>
          <ul role='list'>
            {comments.map(({ _id, text, owner: { email } }) => (
              <li key={_id}>
                <p>{email}: {text}</p>
              </li>
            ))}
          </ul>
          {comments.length === 0 && (
            <p className={styles['no-recipe']}>No recipe comments.</p>
          )}
        </div>



        <form className={styles['form-input']} onSubmit={onSubmit}>
          <textarea
            name='comment'
            placeholder="Enter your comment here..."
            className={styles["create-comment-textarea"]}
            value={values.comment}
            onChange={onChange}
            rows="4"
            cols="50"
          />
          <br />
          <button className={styles["create-comment-button"]}>Add Comment</button>
        </form>
      </div>

    </div>
  );
};
