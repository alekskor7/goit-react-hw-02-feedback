import { Component } from 'react';
import propTypes from 'prop-types';

class Notification extends Component {
  render() {
    const message = this.props.message;
    return (
      <>
        <p>{message}</p>
      </>
    );
  }
}
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;