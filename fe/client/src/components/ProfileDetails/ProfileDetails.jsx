import { useContext } from "react";
import styles from "./ProfileDetails.module.css";
import { AuthContext } from "../../contexts/authContext";

export const ProfileDetails = () => {
  const { email } = useContext(AuthContext);
  return (
    <div className={styles["container-user-details"]}>
      <div className={styles["content-user-details"]}>
        <div className={styles["user-details-information"]}>

          <div className={styles["user-details-info"]}>
            <label htmlFor="" className={styles["user-details-label"]}>
              Email
            </label>
            <p className={styles["user-details-value"]}>{email}</p>
          </div>
        </div>
        <button className={styles["user-details-button"]}>Edit Profile</button>
      </div>
    </div>
  );
};
