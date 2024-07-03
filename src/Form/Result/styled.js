import styled from "styled-components";

export const StyledResult = styled.p`
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    font-size: 25px;

    @media(max-width: 359px) {
        display: flex;
        flex-wrap: wrap;
    }
`;