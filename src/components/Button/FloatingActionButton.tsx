import * as React from 'react';
import glamorous from 'glamorous';
import { CSSProperties } from 'glamorous';

import { StyledButton } from '../../typings';
import {
    shadow
} from '../../styles';
import {
    baseButtonStyles,
    baseEnabledStyles,
    baseDisabledStyles
} from './SharedStyles';

const restingColor: string = '#2196F3';
const focusedColor: string = 'rgba(33, 150, 243, 0.8)';
const textColor: string = 'white';
const rippleColor: string = 'white';
const buttonDimension: number = 56;

const disabledStyles: CSSProperties = baseDisabledStyles({
    opacity: 0.4
});

const enabledStyles: CSSProperties = baseEnabledStyles({
    focusedColor,
    rippleColor,
    rippleDimension: buttonDimension,
    opacity: .2,
    activeShadow: shadow[12]
});

const StyledButton: StyledButton<Props> = glamorous.button(
    baseButtonStyles({
        fontColor: textColor,
        backgroundColor: restingColor,
        boxShadow: shadow[6],
        borderRadius: '50%',
        fontSize: '24px',
        padding: '0px',
        minHeight: `${buttonDimension}px`,
        minWidth: `${buttonDimension}px`
    }), ({ disabled }: Props) => (disabled ? disabledStyles : enabledStyles));

interface Props {
    children: string;
    disabled?: boolean;
}

export function FloatingActionButton(props: Props): JSX.Element {
    const { disabled, children, ...rest } = props;

    return (
        <StyledButton disabled={disabled} {...rest}>{children}</StyledButton>
    );
}
