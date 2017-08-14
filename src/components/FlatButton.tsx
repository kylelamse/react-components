import * as React from 'react';
import glamorous from 'glamorous';
import { GlamorousComponent, CSSProperties } from 'glamorous';

import { shadow1DP, shadow2DP, shadow8DP, easeInOut, ripple } from '../styles';

const restingColor: string = '#2196F3';
const focusedColor: string = 'rgba(153, 153, 153, 0.2)';
const rippleColor: string = 'rgba(153, 153, 153, 0.4)';
const rippleDimension: number = 100;
const rippleMarginOffset: number = -(rippleDimension / 2);

const disabledStyles: CSSProperties = {
    opacity: 0.4
};

const enabledStyles: CSSProperties = {
    [':hover']: {
        cursor: 'pointer',
        background: focusedColor
    },
    [':after']: {
        content: '\'\'',
        display: 'block',
        visibility: 'hidden',
        position: 'absolute',
        top: '50%',
        left: '50%',
        borderRadius: '50%',
        background: rippleColor,
        opacity: .6,
        height: `${rippleDimension}px`,
        width: `${rippleDimension}px`,
        marginLeft: `${rippleMarginOffset}px`,
        marginTop: `${rippleMarginOffset}px`,
        transform: 'scale(0)'
    },
    [':focus:after']: {
        visibility: 'visible'
    },
    [':not(:active):after']: {
        animation: `${ripple} 1000ms ${easeInOut}`
    }
};

const StyledButton: GlamorousComponent<Props, {}> = glamorous.button({
    fontFamily: '\'Roboto\', sans-serif',
    fontWeight: 500,
    position: 'relative',
    color: restingColor,
    fontSize: '14px',
    padding: '0 16px',
    margin: '0 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    minHeight: '36px',
    minWidth: '88px',
    background: 'transparent',
    boxShadow: 'none',
    borderRadius: '2px',
    userSelect: 'none',
    transition: `all 400ms ${easeInOut}`,
    overflow: 'hidden',
    border: 'none',
    outline: 'none'
}, ({ disabled }: Props) => (
    disabled ? disabledStyles : enabledStyles
));

interface Props {
    disabled?: boolean;
    children: string;
}

export function FlatButton (props: Props): JSX.Element {
    const { children, disabled, ...rest } = props;
    return (
        <StyledButton disabled={disabled} {...rest}>{children}</StyledButton>
    );
}
