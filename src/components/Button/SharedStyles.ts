import { CSSProperties } from 'glamorous';

import {
    easeInOut,
    ripple
} from '../../styles';

interface BaseButtonOpts {
    fontColor: string;
    backgroundColor: string;
    fontSize: string;
    padding: string;
    minHeight: string;
    minWidth: string;
    boxShadow: string;
    borderRadius: string;
}

export function baseButtonStyles (opts: BaseButtonOpts): CSSProperties {
    const {
        fontColor,
        backgroundColor,
        fontSize,
        padding,
        minHeight,
        minWidth,
        boxShadow,
        borderRadius
    } = opts;
    return {
        fontFamily: '\'Roboto\', sans-serif',
        fontWeight: 500,
        textTransform: 'uppercase',
        position: 'relative',
        fontSize,
        padding,
        minHeight,
        minWidth,
        boxShadow,
        borderRadius,
        margin: '0 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        background: backgroundColor,
        transition: `all 400ms ${easeInOut}`,
        overflow: 'hidden',
        border: 'none',
        outline: 'none',
        color: fontColor
    };
}

interface BaseEnabledOptions {
    focusedColor: string;
    rippleColor: string;
    rippleDimension: number;
    rippleOpacity: number;
    activeShadow: string;
}
export function baseEnabledStyles(opts: BaseEnabledOptions): CSSProperties {
    const {
        focusedColor,
        rippleColor,
        rippleDimension,
        rippleOpacity,
        activeShadow
    } = opts;

    const rippleMarginOffset: number = -(rippleDimension / 2);

    return ({
        [':hover']: {
            cursor: 'pointer',
            background: focusedColor
        },
        [':active']: {
            boxShadow: activeShadow
        },
        [':after']: {
            content: '\'\'',
            display: 'block',
            visibility: 'hidden',
            position: 'absolute',
            top: '50%',
            left: '50%',
            borderRadius: '50%',
            transform: 'scale(0)',
            opacity: rippleOpacity,
            background: rippleColor,
            height: `${rippleDimension}px`,
            width: `${rippleDimension}px`,
            marginLeft: `${rippleMarginOffset}px`,
            marginTop: `${rippleMarginOffset}px`,

        },
        [':focus:after']: {
            visibility: 'visible'
        },
        [':not(:active):after']: {
            animation: `${ripple} 1000ms ${easeInOut}`
        }
    });
}

interface BaseDisabledOptions {
    opacity: number;
}

export function baseDisabledStyles(opts: BaseDisabledOptions): CSSProperties {
    const { opacity } = opts;
    return { opacity };
}
