import React from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css'



export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <section>
        <p className={css.good}>good: {good}</p>
        <p className={css.neutral}>neutral: {neutral}</p>
        <p className={css.bad}>bad: {bad}</p>
        <p className={css.total}>Total: {total}</p>
        <p className={css.positivePercentage}>Positive feedback percentage: {positivePercentage}%</p>
      </section>
    );
  };

  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  