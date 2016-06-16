import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ConfirmButton from '../index';

storiesOf('Confirm Button', module)
  .add('default view', () => (
    <ConfirmButton>Normal Button</ConfirmButton>
  ))
  .add('using onConfirm & onClick', () => (
    <ConfirmButton
      onConfirm={ action('triggered onConfirm') }
      onClick={ action('triggered onClick') }
      text="Do stuff"
      textConfirm="Are you sure?"
    />
  ))
  .add('disabling with custom classNames for states', () => (
    <ConfirmButton
      disableAfterConfirmed
      text="Button is Active"
      className="btn btn-primary btn-lg"
      confirming={{
        text: 'Button is Confirming',
        className: 'btn btn-info btn-sm',
      }}
      disabled={{
        text: 'Button is Disabled',
        className: 'btn btn-secondary text-muted',
      }}
    />
  ))
  .add('disable button after confirmed', () => (
    <ConfirmButton
      disableAfterConfirmed
      text="Do stuff"
      confirming={{
        text: 'Do ya really wanna?',
      }}
      disabled={{
        text: 'Doing stuff... assume it will remove this component',
      }}
    />
  ))
  .add('with children - always displays', () => (
    <ConfirmButton
      onConfirm={ action('confirmed') }
      text="do stuff"
      textConfirm="are you sure?"
    >
      Here is child text
    </ConfirmButton>
  ))
  .add('text as react/jsx nodes', () => (
    <ConfirmButton
      onConfirm={ action('button clicked') }
      text={(
        <span>
          Go ahead,&nbsp;
          <em>click this button</em>
        </span>
      )}
      confirming={{
        text: (
          <span>
            Are you&nbsp;
            <em>absolutly</em>&nbsp;
            <strong>sure?</strong>
          </span>
        ),
      }}
      disabled={{
        text: (
          <span>
            Sad face
            <em>DISABLED</em>
          </span>
        ),
      }}
    />
  ));
