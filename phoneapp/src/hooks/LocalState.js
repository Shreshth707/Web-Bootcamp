// custom hook

import { useState, useEffect } from "react";

export default function useLocalState(key, defValue) {
    const [count, setCount] = useState(() => {
        let value = JSON.parse(window.localStorage.getItem(key)) || String(defValue);
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, count);
    }, [count]);

    return [count, setCount];
}