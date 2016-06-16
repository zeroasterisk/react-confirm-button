import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ConfirmButton from '../index';

storiesOf('Confirm Button', module)
  .add('default view', () => (
    <ConfirmButton
      onClick={ action('button clicked') }
      text="do stuff"
      textConfirm="are you sure?"
    />
  ))
  .add('with children - always displays', () => (
    <ConfirmButton
      onClick={ action('button clicked') }
      text="do stuff"
      textConfirm="are you sure?"
    >
      Here is child text --&nbsp;
    </ConfirmButton>
  ));
