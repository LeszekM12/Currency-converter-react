import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <div>
            {date.toLocaleString(undefined)}
        </div>
    )
};
