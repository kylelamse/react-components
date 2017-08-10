import * as React from 'react';
import glamorous from 'glamorous';
const { button, label } = glamorous;

import { colors } from './colors';

const ButtonContainer: any = button({
    fontFamily: '\'Roboto\', sans-serif',
    outline: 'none',
    border: 'none',
    userSelect: 'none',
    padding: '0 16px',
    margin: '0 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    minHeight: '36px',
    minWidth: '56px',
    borderRadius: '2px',
});

interface Props {
    children: string;
}

export const Button: React.SFC<Props> = (props: Props) => {
    const { children } = props;
    return(
        <ButtonContainer>
            {children}
        </ButtonContainer>
    );
};
