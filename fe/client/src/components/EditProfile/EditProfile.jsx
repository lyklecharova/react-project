import React, { useState } from 'react';

import styles from "./EditProfile.module.css";

export const EditProfile = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    password: '',
    confrimPassword: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProfile((profile) => ({
       ...profile, 
       [name]: value 
      }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Тук може да добавите логика за обработка на формата
    console.log(profile);
  };
  return (
    <section className={styles["edit-section"]}>
      <form  onSubmit={onSubmitHandler} method="post" className={styles["edit-form"]}>
        <div>
          <label htmlFor="username" className={styles["edit-form-label"]}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={onChangeHandler}
            className={styles["edit-form-input"]}
            required = {true}
          />
        </div>

        <div>
          <label htmlFor="email" className={styles["edit-form-label"]}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={onChangeHandler}
            className={styles["edit-form-input"]}
            required={true}
          />
        </div>

        <div>
          <label htmlFor="password" className={styles["edit-form-label"]}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={profile.password}
            onChange={onChangeHandler}
            className={styles["edit-form-input"]}
            required={true}
          />
        </div>

        <div>
          <label
            htmlFor="confirm_password"
            className={styles["edit-form-label"]}
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={profile.confrimPassword}
            onChange={onChangeHandler}
            className={styles["edit-form-input"]}
            required={true}
          />
        </div>

        <input
          type="Edit"
          defaultValue="Edit"
          className={styles["edit-form-button"]}
        />
      </form>
    </section>
  );
};
