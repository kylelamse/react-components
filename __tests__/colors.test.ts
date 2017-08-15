import { hexToRGBA, colors } from '../src/colors';

describe('hexToRGBA', () => {
    test('converts blue[500] with opacity', () => {
        const hex: string = colors.blue[500];
        const expected: string = 'rgba(33, 150, 243, 0.9)';
        expect(hexToRGBA(hex, 0.9)).toEqual(expected);
    });
    test('converts blue[500] without opacity', () => {
        const hex: string = colors.blue[500];
        const expected: string = 'rgba(33, 150, 243, 1)';
        expect(hexToRGBA(hex)).toEqual(expected);
    });

    test('converts gray[500] with opacity', () => {
        const hex: string = colors.grey[500];
        const expected: string = 'rgba(158, 158, 158, 0.2)';
        expect(hexToRGBA(hex, 0.2)).toEqual(expected);
    });
});
