import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div className={css.wrap}>
        {options.map((option, ) => (
          <button key={option} className={css[option.toLowerCase()]} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };
  
  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };