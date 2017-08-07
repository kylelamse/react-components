import { css } from 'glamor';

css.global('html, body', {
    '@fontFace': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'local(\'Roboto\'), local(\'Roboto-Regular\'),' +
        'url(https://fonts.gstatic.com/s/roboto/v16/ek4gzZ-GeXAPcSbHtCeQI_esZW2xOQ-xsNqO47m55DA.woff2)' +
        'format(\'woff2\');unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F'
    },
    'fontFamily': 'Roboto, sans-serif',
    'padding': 0,
    'margin': 0
});
