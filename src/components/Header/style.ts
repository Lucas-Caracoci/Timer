import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4rem;
    
`;

export const HeaderButtons = styled.div`
    display: flex;
    gap: 0.5rem;
    a {
        display: flex;
        align-items: center;
        
        
        color: ${props => props.theme['gray-100']};

        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 8px;
        &:hover {
            background-color: ${props => props.theme['gray-600']};
            transition: background-color 0.2s;
            color: ${props => props.theme['green-300']};
        }
    }
`;