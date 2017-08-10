import * as React from 'react';
import { storiesOf } from '@storybook/react';
import glamorous from 'glamorous';
const { div } = glamorous;

import { Button } from '../components';
import '../components/global.ts';

const Container: any = div({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

storiesOf('Button', module)
    .add('Default', () =>
        <Container>
            <Button>Click Me</Button>
        </Container>
    );
