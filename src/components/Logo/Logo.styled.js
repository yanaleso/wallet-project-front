import styled from 'styled-components';
import {theme} from '../../theme';

export const LogoBox = styled.div`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeights.bold};
    display: flex;
    align-items: center;
`;

export const LogoWallet = styled.img`
    margin-right: 16px;
    
    @media (min-width: 768px) {
        margin-right: 20px;
    }
`;
