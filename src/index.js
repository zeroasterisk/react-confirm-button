import React from 'react';
import classnames from 'classnames';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

export default class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.onClick = props.onClick.bind(this);
    this.onConfirmClicked = this.handleConfirmClicked.bind(this);
  }
  handleConfirmClicked() {
    if (this.state.clicked) {
      this.setState({ clicked: false });
      this.onClick();
      return;
    }
    this.setState({ clicked: true });
  }
  render() {
    const {
      children,
      onClick,
      style,
      styleConfirm,
      className,
      classNameConfirm,
      text,
      textConfirm,
    } = this.props;
    const { clicked } = this.state;
    return (
      <button
        className={classnames(
          'confirm-button',
          { 'confirm-button-confirming': clicked },
          { [classNameConfirm]: clicked }
        )}
        style={(clicked ? styleConfirm : style)}
        onClick={this.onConfirmClicked}
      >
        {children}
        {clicked ? textConfirm : text}
      </button>
    );
  }
}
ConfirmButton.propTypes = {
  children: React.PropTypes.string.isRequired,
  // user passed in function to be triggered after confirmed
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
  styleConfirm: React.PropTypes.object,
  className: React.PropTypes.string,
  classNameConfirm: React.PropTypes.string,
  text: React.PropTypes.string,
  textConfirm: React.PropTypes.string,
};

