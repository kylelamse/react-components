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

// disable styles
const disabledStyles: any = {
    opacity: 0.4
};

// enabled styles
const rippleDimension: number = 100;
const marginOffset: number = - (rippleDimension / 2);
const enabledStyles: any = {
    // hover styles
    [':hover']: {
        cursor: 'pointer',
        background: focusedColor
    },
    // during click styles
    [':active']: {
        boxShadow: shadow8DP
    },
    // ripple styles
    [':after']: {
        visiblity: 'hidden',
        content: '',
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        borderRadius: '50%',
        background: 'white',
        height: `${rippleDimension}px`,
        width: `${rippleDimension}px`,
        marginLeft: `${marginOffset}px`,
        marginTop: `${marginOffset}px`,
        transform: 'scale(0)'
    },
    // ripple after clicked styles
    [':not(:active):after']: {
        animation: `ripple 1000ms ${easeInOut}`
    },
    // only allow animation when focused
    [':focus:after']: {
        visiblity: 'visibile'
    }
};

// base styles
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
    boxShadow: shadow2DP,
    transition: `all 400ms ${easeInOut}`
},
// function to conditionally apply style objects based on props
({disabled = false}: Props) => (
    disabled ? disabledStyles : enabledStyles
));

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
