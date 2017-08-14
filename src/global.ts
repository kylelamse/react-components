import { css } from 'glamor';

css.global('html, body', {
    fontFamily: 'Roboto, sans-serif',
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%',
    background: '#EEEEEE'
});

const reg: string = `local('Roboto'), local('Roboto-Regular'), url(\
https://fonts.gstatic.com/s/roboto/v16/CWB0XYA8bzo0kSThX0UTuA.woff2)\
format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153,\
U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215`;

const med: string = `local('Roboto Medium'), \
local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/\
v16/RxZJdnzeo3R5zSexge8UUVtXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\');\
unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, \
U+2000-206F, U+2074, U+20AC, U+2212, U+2215`;
css.global('@font-face', {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    src: reg
});

css.global('@font-face', {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    src: med
});

css.global('*, *:before, *:after', {
    boxSizing: 'border-box'
});

css.global('#root', {
    height: '100%',
    width: '100%'
});
