import React from 'react';
import styled from 'styled-components';
//import PropTypes from 'prop-types';

import THEME from '../style/theme';


export const Button = styled.button`
    background-color: red;
    transition: 300ms ease-in-out;
    :hover {
        background-color: blue;
    }
    border: none;
    border-radius: 6px;

    font-size: 10px;
    font-weight: bold;

    padding: 0.75rem 1rem;
    margin: 0.25rem 0;
    width: 100%;
`;

export default function ButtonComponent({ children, ...rest})
    return <Button {...rest}>{children}</Button>;