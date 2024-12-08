import PropTypes from 'prop-types';
import { optionsList, optionsBtn } from './Options.module.css';

function Options({ options, onClick, onReset, totalFeedback }) {
  return (
    <div className={optionsList}>
      <ul className={optionsList}>
        {options.map((option, index) => {
          const label = option.charAt(0).toUpperCase() + option.slice(1);
          return (
            <li key={index}>
              <button className={optionsBtn} type="button" onClick={() => onClick(option)}>
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      {totalFeedback > 0 && (
        <button className={optionsBtn} type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  onClick: PropTypes.func,
  onReset: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  totalFeedback: PropTypes.number,
};

export default Options;
