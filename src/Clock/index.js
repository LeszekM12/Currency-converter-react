import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            {date.toLocaleString(undefined)}
        </StyledClock>
    )
};
