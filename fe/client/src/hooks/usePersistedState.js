import { useState } from 'react';

// usePersistedState е React хук, който позволява на функционалните компоненти да поддържат персистентно състояние, 
//като автоматично запазва и възстановява данни в локалното хранилище на браузъра.
export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        // localStorage е вграден обект в браузъра, който предоставя възможност за съхранение на данни в локалното хранилище на потребителя.
        //getItem(key) връща стойността, асоциирана с подадения ключ key в локалното хранилище. Ако няма стойност за дадения ключ, този метод връща null.
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            // Има запазено състояние за дадения ключ
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializedValue;
        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    };

    return [
        state,
        setPersistedState,
    ];
}