import PropTypes from 'prop-types';

function Options({ options, onClick, onReset, totalFeedback }) {
  return (
    <>
      <ul>
        {options.map((option, index) => {
          const label = option.charAt(0).toUpperCase() + option.slice(1);
          return (
            <li key={index}>
              <button type="button" onClick={() => onClick(option)}>
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      {totalFeedback > 0 && (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </>
  );
}

Options.propTypes = {
  onClick: PropTypes.func,
  onReset: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  totalFeedback: PropTypes.number,
};

export default Options;
