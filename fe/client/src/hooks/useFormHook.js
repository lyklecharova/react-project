import { useState } from "react";

export function useFormHooks(submitHandler, initialValues) {
    // values държи стейта, setValues - променя този стейт
    const [values, setValues] = useState(initialValues);

    //  използва се за обработка на събитие при промяна във въведените данни в полета на формата.
    const onChange = (e) => {
        // setValues приема функция като аргумент, която ще бъде изпълнена от React. 
        //Тази функция получава текущото състояние (state) и връща ново състояние, което ще се използва за актуализиране на стойностите на values.
        setValues(state => ({
            //...state се използва за разширяване (spread) на текущото състояние, така че да се запазят всички текущи стойности на формата.
            ...state,
            //[e.target.name]: e.target.value добавя новата стойност към обекта. 
            // e.target.name се използва за динамично извличане на името на полето във формата от HTML събитието (e), 
            //e.target.value съдържа новата стойност, въведена в това поле.
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