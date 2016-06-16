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
      confirming={{ text: "Are you sure?" }}
    />
  ))
  .add('disabling, after Confirm, defaults', () => (
    <ConfirmButton
      disableAfterConfirmed
    >
      Do Stuff
    </ConfirmButton>
  ))
  .add('disabling, after Confirm, custom texts', () => (
    <ConfirmButton
      disableAfterConfirmed
      onConfirm={ action('triggered onConfirm') }
      onClick={ action('triggered onClick') }
      text="Do stuff"
      confirming={{ text: "Are you sure?" }}
      disabled={{ text: "Hold on... doing stuff" }}
    />
  ))
  .add('disabling with custom classNames and styles', () => (
    <ConfirmButton
      disableAfterConfirmed
      onConfirm={ action('confirmed') }
      text="Button is Active"
      className="btn btn-primary btn-lg"
      style={{ borderColor: 'yellow' }}
      confirming={{
        text: 'Button is Confirming',
        className: 'btn btn-info btn-sm',
        style: { borderColor: 'green' },
      }}
      disabled={{
        text: 'Button is Disabled',
        className: 'btn btn-secondary text-muted',
        style: { borderColor: 'red' },
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
