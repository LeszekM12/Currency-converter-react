import { PacmanLoader } from "react-spinners";
import { ErrorText, ErrorBox } from "./styled";

export const Error = () => (
    <ErrorBox>
        <PacmanLoader
          color="#ffffff"
          margin={0}
          size={50}
        />
           <ErrorText>
                Wystąpił błąd! Sprawdź połączenie sieci.
           </ErrorText>
    </ErrorBox>
        
);