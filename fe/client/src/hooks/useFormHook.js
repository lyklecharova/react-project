import { useState } from "react";

export function useFormHooks(submitHandler, initialValues) {
    const [values, setValues] = useState({ initialValues }); // values държи стейта, setValues - променя този стейт

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);

    };

    return {
        values,
        onChange,
        onSubmit
    };
};