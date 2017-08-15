import { CSSProperties } from 'glamorous';

import {
    easeInOut
} from '../../styles';

export const baseButton: CSSProperties = {
    fontFamily: '\'Roboto\', sans-serif',
    fontWeight: 500,
    position: 'relative',
    fontSize: '24px',
    margin: '0 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    transition: `all 400ms ${easeInOut}`,
    overflow: 'hidden',
    border: 'none',
    outline: 'none'
};

export const baseRipple: CSSProperties = {

};
