import * as React from 'react';
import glamorous from 'glamorous';
import { CSSProperties } from 'glamorous';

import { StyledButton } from '../../typings';
import {
    baseButtonStyles,
    baseDisabledStyles,
    baseEnabledStyles
} from './SharedStyles';
import {
    shadow
} from '../../styles';

// colors
const restingColor: string = '#2196F3';
const focusedColor: string = '#1A77C9';
const textColor: string = 'white';

// disable styles
const disabledStyles: CSSProperties = baseDisabledStyles({
    opacity: 0.4
});

// enabled styles
const rippleDimension: number = 100;
const enabledStyles: CSSProperties = baseEnabledStyles({
    focusedColor,
    rippleColor: 'white',
    rippleDimension,
    rippleOpacity: 0.4,
    activeShadow: shadow[8]
});

// base styles
const StyledButton: StyledButton<Props> = glamorous.button(baseButtonStyles({
    fontColor: textColor,
    backgroundColor: restingColor,
    fontSize: '14px',
    padding: '0 16px',
    minHeight: '36px',
    minWidth: '56px',
    boxShadow: shadow[2],
    borderRadius: '2px'
}),
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
