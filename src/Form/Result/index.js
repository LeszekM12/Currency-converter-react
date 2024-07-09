import { StyledResult } from "./styled";

export const Result = ({ result }) => (
    <StyledResult>
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                  {result.targetAmount.toFixed(4)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </StyledResult>
);