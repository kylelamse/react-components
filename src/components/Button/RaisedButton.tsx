import * as React from 'react';
import glamorous from 'glamorous';
import { CSSProperties } from 'glamorous';

import { StyledButton } from '../../typings';
import {
    shadow,
    easeInOut,
    ripple
} from '../../styles';

// colors
const restingColor: string = '#2196F3';
const focusedColor: string = '#1A77C9';
const textColor: string = 'white';

// disable styles
const disabledStyles: CSSProperties = {
    opacity: 0.4
};

// enabled styles
const rippleDimension: number = 100;
const marginOffset: number = - (rippleDimension / 2);
const enabledStyles: CSSProperties = {
    // hover styles
    [':hover']: {
        cursor: 'pointer',
        background: focusedColor
    },
    // during click styles
    [':active']: {
        boxShadow: shadow[8]
    },
    // ripple styles
    [':after']: {
        visibility: 'hidden',
        opacity: .4,
        content: '\'\'',
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
        animation: `${ripple} 1000ms ${easeInOut}`
    },
    // only allow animation when focused
    [':focus:after']: {
        visibility: 'visible'
    }
};

// base styles
const StyledButton: StyledButton<Props> = glamorous.button({
    fontFamily: '\'Roboto\', sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    outline: 'none',
    border: 'none',
    userSelect: 'none',
    position: 'relative',
    overflow: 'hidden',
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
    boxShadow: shadow[2],
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

export function RaisedButton (props: Props): JSX.Element {
    const { children, disabled, ...rest } = props;
    return(
        <StyledButton disabled={disabled} {...rest}>
            {children}
        </StyledButton>
    );
}
