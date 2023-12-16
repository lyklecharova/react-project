import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";

import styles from "./DetailsRecipes.module.css";
import * as recipeService from "../../services/recipeService";
import * as recipeCommentsService from "../..//services/recipeCommentsService";
import { pathToUrl } from "../../utils/pathUtils";
import { Path } from "../../paths";
import { reducer } from "./commentReducer";
import { AuthContext } from "../../contexts/authContext";
import { useFormHooks } from "../../hooks/useFormHook";

export const DetailsRecipes = () => {
  const navigate = useNavigate();
  const { email, userId, isAuthenticated } = useContext(AuthContext);
  const [recipe, setRecipe] = useState({});
  // Редюсърът е чиста функция, която приема текущото състояние и действието и връща ново състояние.
  // comments представлява текущото състояние на коментарите и е инициализирано с празен масив ([]).
  // dispatch е функцията, която се използва за изпращане на действия (actions) към reducer. 
  //Тя ще актуализира comments в съответствие с логиката, дефинирана в reducer.
  const [comments, dispatch] = useReducer(reducer, []);
  const { recipeId } = useParams();

  useEffect(() => {
    recipeService.getOne(recipeId).then(setRecipe);

    recipeCommentsService.getAll(recipeId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [recipeId]);

  const addCommentHandler = async (values) => {
    try {
      const newComment = await recipeCommentsService.create(
        recipeId,
        values.comment
      );
      newComment.owner = { email };
      dispatch({
        type: "ADD_COMMENT",
        payload: newComment,
      });
      values.comment = "";
    } catch (err) {
      console.log(err);
    }

  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${recipe.title}?`
    );

    if (hasConfirmed) {
      await recipeService.del(recipeId);

      navigate("/dashboard");
    }
  };

  const deleteCommentButtonOnClick = async (commentId) => {
    try {
      const hasConfirmedDeleteComment = confirm(
        `Are you sure you want to delete this comment?`
      );

      if (hasConfirmedDeleteComment) {
        await recipeCommentsService.delComment(commentId);

        // Update the state using dispatch
        dispatch({
          type: "DELETE_COMMENT",
          payload: commentId,
        });

        // Optional: Log the filtered comments
        const filtered = comments.filter((c) => c._id !== commentId);
        return filtered
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw Error(error);
    }
  };

  const editCommentButtonOnClick = async (commentId, recipeId) => {
    try {
      const hasConfirmedEditComment = confirm(
        `Are you sure you want to edit this comment?`
      );

      if (hasConfirmedEditComment) {
        // prompt е функцията за въвеждане на текст
        // The prompt() method displays a dialog box that prompts the user for input
        // The prompt() method returns the input value if the user clicks "OK", otherwise it returns null
        const newCommentText = prompt("Enter the new comment:");
        if (newCommentText !== null) {
          const editedComment = await recipeCommentsService.editComment(recipeId, commentId, newCommentText);
          dispatch({
            type: "EDIT_COMMENT",
            payload: { commentId, newCommentText },
          });
          //Обектът window.location представлява информация за текущия URL на уеб страницата.
          // reload() методът се използва, за да презареди уеб страницата. Този метод може да бъде извикан без аргументи или с един аргумент
          //The reload() method reloads the current document
          //The reload() method does the same as the reload button in your browser
          window.location.reload(true);
          return editedComment;
        }

      }
    } catch (error) {
      console.error("Error editing comment:", error);
      throw Error(error);
    }
  };

  const { values, onChange, onSubmit } = useFormHooks(addCommentHandler, {
    comment: "",
  });

  function parseIngridients(ingredients) {
    // console.log(ingredients);
    if (typeof ingredients === 'object' && typeof ingredients !== "string") {
      // /\\r?\\n/ се използва за съвпадение с нов ред в текст,
      ingredients = ingredients[0].trim().split(/\r?\n/)
    }

    if (typeof ingredients === "string" && ingredients.trim() !== "") {
      // \n е символ за нов ред 
      ingredients = ingredients.trim().split(/\n/);
    }
    return ingredients;
  }

  return (
    <div className={styles["container-recipe-details"]}>
      <div className={styles["content-recipe-details"]}>
        <div className={styles["recipe-details-information"]}>
          <div className={styles["recipe-details-info"]}>
            <img
              className={styles["dashboard-img-details"]}
              src={recipe.image}
              alt={recipe.title}
            />

            <h2 className={styles["recipe-details-value"]}>{recipe.title}</h2>
          </div>
          <div className={styles["recipe-details-info"]}>
            <ul className={styles["recipe-details-list"]} role="list">
              <div className={styles["recipe-detail-ingedients"]}>
                {!recipe.ingredients ? (
                  <li>No ingredients available</li>
                ) : (
                  parseIngridients(recipe.ingredients).map(
                    (ingredient, index) => (
                      <li key={index}>{ingredient.trim()}</li>
                    )
                  )
                )}
              </div>
            </ul>

            <p className={styles["recipe-details-value"]}>
              {recipe.description}
            </p>
          </div>
          {userId === recipe._ownerId && (
            <div className={styles["raw"]}>
              <Link to={pathToUrl(Path.RecipeEdit, { recipeId })} className={styles["link-style"]}>Edit Recipe</Link>
              <button className={styles["link-style"]} onClick={deleteButtonClickHandler}>Delete Recipe</button>
            </div>
          )}
        </div>
      </div>

      <div className={styles["comments-info"]}>
        <div className={styles["comments-container"]}>
          <h3>Comments:</h3>
          <ul role="list">
            {comments.map(({ _id, _ownerId, text, owner: { email } }) => (
              <li key={_id}>
                <p>
                  {email}: {text}
                </p>

                {_ownerId === userId && (
                  <>
                    <button onClick={() => editCommentButtonOnClick(_id, recipeId)} className={styles["edit-comment-button"]} >Edit Comment</button>
                    <button onClick={() => deleteCommentButtonOnClick(_id)} className={styles["delete-comment-button"]} >Delete Comment</button>
                  </>

                )}
              </li>
            ))}
          </ul>
          {comments.length === 0 && (
            <p className={styles["no-recipe"]}>No recipe comments.</p>
          )}
        </div>

        {isAuthenticated && (
          <form className={styles["form-input"]} onSubmit={onSubmit}>
            <textarea
              name="comment"
              placeholder="Enter your comment here..."
              className={styles["create-comment-textarea"]}
              value={values.comment}
              onChange={onChange}
              rows="4"
              cols="50"
            />
            <br />
            <button className={styles["create-comment-button"]}>
              Add Comment
            </button>
          </form>
        )}
        {!isAuthenticated && <div> <Link to={"/login"} className={styles['comment-link']}>Please login to comment </Link></div>}
      </div>
    </div>
  );
};