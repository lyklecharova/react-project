import { useState } from "react";

export function useFormHooks(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues); // values държи стейта, setValues - променя този стейт

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            submitHandler(values);
        } catch (err) {
            console.log(err);
            throw Error(err);
        }
    };

    return {
        values,
        onChange,
        onSubmit
    };
};