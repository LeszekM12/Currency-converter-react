import { ClockLoader } from "react-spinners";
import { LoadingText, LoadingBox } from "./styled";

export const Loading = () => (
    <LoadingBox>
        <ClockLoader
            color="#ffffff"
            size={100}
            speedMultiplier={2} 
        />
           <LoadingText>
                Wczytywanie kursów walut...
           </LoadingText>
    </LoadingBox>
        
);