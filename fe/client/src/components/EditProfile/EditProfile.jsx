import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/authContext';
import { useFormHooks } from '../../hooks/useFormHook';

import styles from "./EditProfile.module.css";

const EditFormKeys = {
  Email: 'email',
  Password: 'password',
  ConfirmPassword: 'confirmPassword'
};

export const EditProfile = () => {
  const { editSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useFormHooks(editSubmitHandler, {
    [EditFormKeys.Email]: '',
    [EditFormKeys.Password]: '',
    [EditFormKeys.ConfirmPassword]: '',
  });
  return (
    <section className={styles["edit-section"]}>
      <form onSubmit={onSubmit} method="post" className={styles["edit-form"]}>


        <div>
          <label htmlFor="email" className={styles["edit-form-label"]}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values[EditFormKeys.Email]}
            onChange={onChange}
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
            value={values[EditFormKeys.Password]}
            onChange={onChange}
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
            value={values[EditFormKeys.ConfirmPassword]}
            onChange={onChange}
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
