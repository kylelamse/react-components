import { keyframes } from 'glamor';

interface Shadow {
    [1]: string;
    [2]: string;
    [6]: string;
    [8]: string;
    [12]: string;
}
// shadows
export const shadow: Shadow = {
    1: `0px 1px 3px 0px rgba(0, 0, 0, 0.2), \
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), \
        0px 2px 1px -1px rgba(0, 0, 0, 0.12)`,
    2: `0px 1px 5px 0px rgba(0, 0, 0, 0.2), \
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), \
        0px 3px 1px -2px rgba(0, 0, 0, 0.12)`,
    6: `0px 3px 5px -1px rgba(0, 0, 0, 0.2), \
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), \
        0px 2px 1px -1px rgba(0, 0, 0, 0.12)`,
    8: `0px 5px 5px -3px rgba(0, 0, 0, 0.2), \
        0px 8px 10px 1px rgba(0, 0, 0, 0.14), \
        0px 3px 14px 2px rgba(0, 0, 0, 0.12)`,
    12: `0px 7px 8px -4px rgba(0, 0, 0, 0.2), \
        0px 12px 17px 2px rgba(0, 0, 0, 0.14), \
        0px 5px 22px 4px rgba(0, 0, 0, 0.12)`
};

// easing
export const easeInOut: string = 'cubic-bezier(0.4, 0.0, 0.2, 1)';

// animation
export const ripple: string = keyframes({
    ['0%']: {
        transform: 'scale(0)'
    },
    ['20%']: {
        transform: 'scale(1)'
    },
    ['100%']: {
        opacity: 0,
        transform: 'scale(1)'
    }
});
