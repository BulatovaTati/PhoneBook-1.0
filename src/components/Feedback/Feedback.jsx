import PropTypes from 'prop-types';
import { GrStatusGood } from 'react-icons/gr';
import { MdMoodBad } from 'react-icons/md';
import { BsEmojiNeutral } from 'react-icons/bs';

function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
  return (
    <>
      <ul>
        <li>
          <GrStatusGood />
          <p>Good: {good}</p>
        </li>
        <li>
          <BsEmojiNeutral />
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <MdMoodBad />
          <p>Bad: {bad}</p>
        </li>
      </ul>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Feedback;
