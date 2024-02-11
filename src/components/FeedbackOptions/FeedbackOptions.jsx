import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list_buttons}>
      {options.map(option => (
        <li key={option}>
          <button type='button' onClick={() => onLeaveFeedback(option)}>
            {/* {`${option[0].toUpperCase() + option.slice(1)}`} */}
            {option.replace(option[0], option[0].toUpperCase())}
          </button >
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
