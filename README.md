# react-confirm-button

## Install

`npm install --save react-confirm-button`

You will need to install bootstrap or some other styling, as desired.

## Usage

```js
import ConfirmButton from 'react-confirm-button';

...

<div>
  <ConfirmButton
    onClick={this.doStuffAfterConfirm}
    text="Do Stuff"
    confirmText="Are you sure?"
  />
</div>
```

## Roadmap

- [ ] pass in initial state via props
- [ ] support children content as confirm text?
- [ ] make CSS framework agnostic
- [ ] make redux version?

## Acknowledgements

Coded during a [JSLou](http://jslou.org) Meetup

Awesome Tools Used:

* [react-cdj](https://github.com/kadirahq/react-cdk)
* [react-storybook](https://github.com/kadirahq/react-storybook)

