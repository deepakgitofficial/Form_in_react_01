import { useEffect, useState } from "react";

export function LocalStorage(key, initData) {
    const [data, setData] = useState(initData)

    useEffect(() => {
        const existingData = localStorage.getItem(key);
        if (existingData) {
            setData(JSON.parse(existingData));
        } else {
            localStorage.setItem(key, JSON.stringify(initData));
        }
    }, [])

    const updateData = (newData) => {
        if (typeof newData === 'function') {
            localStorage.setItem(key, JSON.stringify(newData(data)));
        } else {
            localStorage.setItem(key, JSON.stringify(newData));
        }
        setData(newData);
    }
    return [data, updateData];
}