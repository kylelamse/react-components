import { HTMLProps } from 'react';
import { GlamorousComponent } from 'glamorous';

export declare type StyledButton<Props> = GlamorousComponent<
    HTMLProps<HTMLButtonElement> & Props, Props
>;
