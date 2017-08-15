import * as React from 'react';
import glamorous from 'glamorous';
import { CSSProperties } from 'glamorous';

import {
    baseEnabledStyles,
    baseDisabledStyles,
    baseButtonStyles
} from './SharedStyles';
import { StyledButton } from '../../typings';
import { colors, hexToRGBA } from '../../colors';

const fontColor: string = colors.blue[500];
// const focusedColor: string = 'rgba(153, 153, 153, 0.2)';
const focusedColor: string = hexToRGBA(colors.grey[500], 0.2);
const rippleColor: string = 'rgba(153, 153, 153, 0.4)';
const rippleDimension: number = 100;

const disabledStyles: CSSProperties = baseDisabledStyles({
    opacity: 0.4
});
const enabledStyles: CSSProperties = baseEnabledStyles({
    focusedColor,
    rippleColor,
    rippleDimension,
    rippleOpacity: .6,
    activeShadow: 'none'
});

const StyledButton: StyledButton<Props> = glamorous.button(
    baseButtonStyles({
        fontColor,
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
