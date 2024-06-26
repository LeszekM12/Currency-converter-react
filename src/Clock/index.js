import { useEffect, useState } from "react"

export const Clock = () => {
    const [ date, setDate ] = useState(new Date);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    return (
        <div>
            {date.toLocaleString(undefined)}
        </div>
    )
};
