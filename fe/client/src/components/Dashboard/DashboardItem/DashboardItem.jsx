import { Link } from 'react-router-dom';
import styles from "../Dashboard.module.css";
export const DashboardItem = ({
    id,
    image,
    title,
}) => {

  const truncatedTitle = title.length > 10 ? `${title.slice(0, 10)}...` : title;
  const truncatedDescription =
  String(description).length > 40
    ? `${String(description).slice(0, 40)}...`
    : String(description);

  return (
    <div className={styles["dashboard-content"]}>
      <img className={styles["dashboard-img"]} src={image}  />
      <div className={styles["dashboard-information"]}>
        <h3 className={styles["dashboard-information-title"]}>{truncatedTitle}</h3>
        <p className={styles["dashboard-information-description"]}>
          {truncatedDescription}
        </p>
      </div>

      <Link to={`/recipes/${id}`}>
        <button className={styles["dashboard-button"]}>Whole Recipe</button>
      </Link>
    </div>
  );
}