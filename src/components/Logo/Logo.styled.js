import styled from 'styled-components';

export const LogoBox = styled.div`
    font-family: ${p => p.theme.fonts.headingBold};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 23px;
    }
`;

export const LogoWallet = styled.img`
    margin-right: 16px;
    
    @media (min-width: 768px) {
        margin-right: 20px;
    }
`;
