import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components';
import '../components/global.ts';

storiesOf('Button', module)
    .add('Default', () =>
        <Button />
    );
