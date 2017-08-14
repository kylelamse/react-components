import * as React from 'react';
import { storiesOf } from '@storybook/react';
import glamorous from 'glamorous';
import { GlamorousComponent } from 'glamorous';

import { RaisedButton } from '../src/components';
import '../components/global.ts';

const Container: GlamorousComponent<{}, {}> = glamorous.div({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

storiesOf('Button', module)
    .add('Default', () =>
        <Container>
            <RaisedButton>Default</RaisedButton>
            <RaisedButton disabled>Disabled</RaisedButton>
        </Container>
    );
