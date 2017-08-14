import * as React from 'react';
import { storiesOf } from '@storybook/react';
import glamorous from 'glamorous';
import { GlamorousComponent } from 'glamorous';

import {
    RaisedButton,
    FlatButton,
    FloatingActionButton
} from '../src/components';
import '../src/global.ts';

const Container: GlamorousComponent<{}, {}> = glamorous.div({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

storiesOf('RaisedButton', module)
    .add('Default', () =>
        <Container>
            <RaisedButton>Default</RaisedButton>
        </Container>
    )
    .add('Disabled', () =>
        <Container>
            <RaisedButton disabled>Disabled</RaisedButton>
        </Container>
    );

storiesOf('FlatButton', module)
    .add('Default', () => (
        <Container>
            <FlatButton>Default</FlatButton>
        </Container>
    ))
    .add('Disabled', () => (
        <Container>
            <FlatButton disabled>Disabled</FlatButton>
        </Container>
    ));

storiesOf('FloatingActionButton', module)
    .add('Default', () => (
        <Container>
            <FloatingActionButton>+</FloatingActionButton>
        </Container>
    ))
    .add('Disabled', () => (
        <Container>
            <FloatingActionButton disabled>+</FloatingActionButton>
        </Container>
    ));
