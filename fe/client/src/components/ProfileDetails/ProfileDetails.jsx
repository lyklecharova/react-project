import styles from "./ProfileDetails.module.css";

export const ProfileDetails = () => {
  return (
    <div className={styles["container-user-details"]}>
      <div className={styles["content-user-details"]}>
        <div className={styles["user-details-information"]}>
          <div className={styles["user-details-info"]}>
            <label htmlFor="" className={styles["user-details-label"]}>
              Username
            </label>
            <p className={styles["user-details-value"]}>Current Username</p>
          </div>
          <div className={styles["user-details-info"]}>
            <label htmlFor="" className={styles["user-details-label"]}>
              Email
            </label>
            <p className={styles["user-details-value"]}>Current Email</p>
          </div>
        </div>
        <button className={styles["user-details-button"]}>Edit Profile</button>
      </div>
    </div>
  );
};
