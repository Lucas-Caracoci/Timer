import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
`;

export const HeaderButtons = styled.div`
    display: flex;
    gap: 0.5rem;
    
    a {
        transition: all 0.2s;
        
        box-shadow: none;
        display: flex;
        align-items: center;
        
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        color: ${props => props.theme['gray-100']};
        cursor: pointer;
        padding: 0.5rem;
        
        &.active {
            color: ${props => props.theme['green-300']}
            
        }
    }
    a:hover {
            background-color: ${props => props.theme['gray-600']};
            transition: background-color 0.2s;
            color: ${props => props.theme['green-300']};
            border-bottom: 3px solid ${props => props.theme['green-300']};
        }
`;