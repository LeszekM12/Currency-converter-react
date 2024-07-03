import styled from "styled-components";

export const StyledForm = styled.form``;

export const Header = styled.h1`
    text-align: center;
`;

export const Input = styled.input`
    border: 1px solid rgb(68, 68, 68);
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 10px;
    background-color: hsl(0, 0%, 27%);
    color: aliceblue;

    &:hover {
        background-color: hsl(0, 0%, 22%);
    }
`;

export const Select = styled.select`
    border: 1px solid rgb(68, 68, 68);
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 10px;
    background-color: hsl(0, 0%, 27%);
    color: aliceblue;

    &:hover {
        background-color: hsl(0, 0%, 22%);
    }
`;

export const Label = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 100px;
    color: aliceblue;
`;

export const Button = styled.button`
    border-radius: 20px;
    padding: 10px;
    border: 1px solid rgb(68, 68, 68);;
    width: 100%;
    background-color: hsl(0, 0%, 27%);
    color: aliceblue;

    &:hover {
        background-color: hsl(0, 0%, 22%);
    }

    &:active {
        background-color: hsl(0, 0%, 17%);
    }
`;