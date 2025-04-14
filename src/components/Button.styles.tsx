import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'blue',
    secondary: 'green',
    danger: 'red',
    success: 'yellow',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width:100px;
height:40px;
border:none;
margin-right:10px;
border-radius:5px;

cursor:pointer;
color:white;
font-weight:bold;   
${ props  => {
    return `background-color: ${buttonVariants[props.variant]};`
    }}

`