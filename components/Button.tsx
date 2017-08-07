import * as React from 'react';
import glamorous from 'glamorous';
const { div, label } = glamorous;

import { colors } from './colors';

const ButtonContainer: any = div({
    ':hover': {
        cursor: 'pointer',
        background: colors.grey['300']
    },
    ':firstChild': {
        color: 'blue'
    },
    'width': '100%',
    'height': '36px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'textTransform': 'uppercase',
    'fontSize': '16px',
    'borderRadius': '2px',
    'background': colors.grey['200']
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
