# react-confirm-button

## Install

`npm install --save react-confirm-button`

You may install bootstrap or material-ui or any other styling, as desired.

## Usage

```js
import ConfirmButton from 'react-confirm-button';

...

  <div>

    <p>Basic Confirmation Button</p>
    <ConfirmButton
      onConfirm={() => console.log('I have Confirmed')}
      text="Do Stuff"
      confirming={{
        text: "Are you sure?"
      }}
    />

    <p>Fully Customized Button</p>
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
  </div>
```

See more **examples and demos** on [storybook @ zeroasterisk.github.io](https://zeroasterisk.github.io/react-confirm-button/)
and the **source code** for those examples [in the stories](https://github.com/zeroasterisk/react-confirm-button/blob/master/src/stories/index.js)

## Dependancies

* React

## Roadmap

- [x] support children content as confirm text?
- [x] support disabled state
- [x] make CSS framework agnostic
- [ ] make redux version?

## Acknowledgements

Coded during a [JSLou](http://jslou.org) Meetup

Awesome Tools Used:

* [react-cdj](https://github.com/kadirahq/react-cdk)
* [react-storybook](https://github.com/kadirahq/react-storybook)
* [webpack bootstrap-loader](https://github.com/shakacode/bootstrap-loader)

