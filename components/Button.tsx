import * as React from 'react';
import glamorous from 'glamorous';
const { button } = glamorous;

import { colors } from './colors';

// colors
const restingColor: string = '#2196F3';
const focusedColor: string = '#1A77C9';
const textColor: string = 'white';

// shadows
const shadow1DP: string = `0px 1px 3px 0px rgba(0, 0, 0, 0.2), \
0px 1px 1px 0px rgba(0, 0, 0, 0.14), \
0px 2px 1px -1px rgba(0, 0, 0, 0.12)`;
const shadow2DP: string = `0px 1px 5px 0px rgba(0, 0, 0, 0.2), \
0px 2px 2px 0px rgba(0, 0, 0, 0.14), \
0px 3px 1px -2px rgba(0, 0, 0, 0.12)`;
const shadow8DP: string = `0px 5px 5px -3px rgba(0, 0, 0, 0.2), \
0px 8px 10px 1px rgba(0, 0, 0, 0.14), \
0px 3px 14px 2px rgba(0, 0, 0, 0.12)`;

// easing
const easeInOut: string = 'cubic-bezier(0.4, 0.0, 0.2, 1)';

const ButtonContainer: any = button({
    fontFamily: '\'Roboto\', sans-serif',
    fontWeight: 500,
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
    color: textColor,
    background: restingColor,
    boxShadow: shadow2DP
},
({disabled = false}: Props) => {
    if (disabled) {
        return {
            opacity: 0.4
        };
    } else {
        return {
            ':hover': {
                cursor: 'pointer',
                background: focusedColor
            }
        };
    }
});

interface Props {
    children: string;
    disabled?: boolean;
}

export const Button: React.SFC<Props> = (props: Props) => {
    const { children } = props;
    return(
        <ButtonContainer>
            {children}
        </ButtonContainer>
    );
};
