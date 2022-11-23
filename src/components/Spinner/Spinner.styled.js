import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = styled(RotatingLines)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`