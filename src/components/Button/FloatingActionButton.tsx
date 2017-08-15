import * as React from 'react';
import glamorous from 'glamorous';
import { CSSProperties } from 'glamorous';

import { StyledButton } from '../../typings';
import {
    shadow,
    ripple,
    easeInOut
} from '../../styles';
import {
    baseButtonStyles,
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

const rippleMarginOffset: number = - (buttonDimension / 2);
const enabledStyles: CSSProperties = {
    [':hover']: {
        background: focusedColor,
        cursor: 'pointer'
    },
    [':active']: {
        boxShadow: shadow[12]
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
        opacity: .2,
        height: `${buttonDimension}px`,
        width: `${buttonDimension}px`,
        marginLeft: `${rippleMarginOffset}px`,
        marginTop: `${rippleMarginOffset}px`,
        transform: 'scale(0)'
    },
    [':not(:active):after']: {
        animation: `${ripple} 1000ms ${easeInOut}`
    },
    [':focus:after']: {
        visibility: 'visible'
    }
};

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
