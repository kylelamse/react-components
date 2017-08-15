import * as React from 'react';
import glamorous from 'glamorous';
import { CSSProperties } from 'glamorous';

import {
    baseEnabledStyles,
    baseDisabledStyles,
    baseButtonStyles
} from './SharedStyles';
import { StyledButton } from '../../typings';

const restingColor: string = '#2196F3';
const focusedColor: string = 'rgba(153, 153, 153, 0.2)';
const rippleColor: string = 'rgba(153, 153, 153, 0.4)';
const rippleDimension: number = 100;

const disabledStyles: CSSProperties = baseDisabledStyles({
    opacity: 0.4
});
const enabledStyles: CSSProperties = baseEnabledStyles({
    focusedColor,
    rippleColor,
    rippleDimension,
    opacity: .6,
    activeShadow: 'none'
});

const StyledButton: StyledButton<Props> = glamorous.button(
    baseButtonStyles({
        fontColor: restingColor,
        backgroundColor: 'transparent',
        fontSize: '14px',
        padding: '0 16px',
        minHeight: '36px',
        minWidth: '88px',
        boxShadow: 'none',
        borderRadius: '2px'
    }), ({ disabled }: Props) => (
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
