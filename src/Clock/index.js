import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";
import { ClockLoader } from "react-spinners";

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            <ClockLoader
            color="#ffffff"
            cssOverride={{}}
            size={20}
            speedMultiplier={0.5}
            />
            {date.toLocaleString(undefined)}
        </StyledClock> 
        
    )
};
