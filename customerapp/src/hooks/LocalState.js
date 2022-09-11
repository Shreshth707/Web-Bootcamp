// custom hook

import { useState, useEffect } from "react";

export default function useLocalState(key, defValue) {
    const [count, setCount] = useState(() => {
        let value = parseInt(window.localStorage.getItem(key)) || defValue;
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, count);
    }, [count]);

    return [count, setCount];
}

