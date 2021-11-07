import React, { Component } from 'react';
import propTypes from 'prop-types';
import Style from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p className={Style.description}>Good: {good}</p>
        <p className={Style.description}>Neutral: {neutral}</p>
        <p className={Style.description}>Bad: {bad}</p>
        <p className={Style.description}>Total: {total()}</p>
        <p
          className={
            positivePercentage() > 50
              ? `${Style.description} ${Style.good}`
              : `${Style.description} ${Style.bad}`
          }
        >
          Percentage: {positivePercentage()} %
        </p>
      </div>
    );
  }
}
Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.func,
  positivePercentage: propTypes.func,
};
export default Statistics;