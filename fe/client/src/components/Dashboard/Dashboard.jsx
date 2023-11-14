import styles from "./Dashboard.module.css";
import {DashboardItem} from './DashboardItem/DashboardItem' 
export const Dashboard = ({
  recipes
}) => {
  return (
    <div className={styles["container-dashboard"]}>
      <div className={styles["container-dashboard-list"]}>
    	  {recipes.map(x=> <DashboardItem key={x.id} {...x}/>)}
      </div>
    </div>
  );
};
