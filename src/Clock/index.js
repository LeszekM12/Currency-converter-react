import { useCurrentDate } from "./useCurrentDate";
import { StyledClock, ClockBox } from "./styled";
import { ClockLoader } from "react-spinners";

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockBox>
            <ClockLoader
                    color="#ffffff"
                    cssOverride={{}}
                    size={20}
                    speedMultiplier={0.5}
                />
            <StyledClock>
                    {date.toLocaleString(undefined)}
            </StyledClock> 
        </ClockBox>
    )
};
