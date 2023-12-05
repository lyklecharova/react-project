
import { useState } from 'react';

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        try {
            const persistedState = localStorage.getItem(key);

            if (persistedState) {
                return JSON.parse(persistedState);
            }
        } catch (error) {
            console.error("Error parsing persisted state:", error);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        try {
            let serializedValue;
            if (typeof value === 'function') {
                serializedValue = JSON.stringify(value(state));
            } else {
                serializedValue = JSON.stringify(value);
            }

            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error("Error storing state in localStorage:", error);
        }
    };

    return [state, setPersistedState];
}
