import PropTypes from 'prop-types';
import { GrStatusGood } from 'react-icons/gr';
import { MdMoodBad } from 'react-icons/md';
import { BsEmojiNeutral } from 'react-icons/bs';
import { feedbackList, feedbackText, feedbackStats } from './Feedback.module.css';

function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
  return (
    <>
      <ul className={feedbackList}>
        <li>
          <GrStatusGood size={24} color="green" />
          <p className={feedbackText}>Good: {good}</p>
        </li>
        <li>
          <BsEmojiNeutral size={24} color="orange" />
          <p className={feedbackText}>Neutral: {neutral}</p>
        </li>
        <li>
          <MdMoodBad size={24} color="red" />
          <p className={feedbackText}>Bad: {bad}</p>
        </li>
      </ul>
      <div className={feedbackStats}>
        <p className={feedbackText}>Total: {totalFeedback}</p>
        <p className={feedbackText}> Positive: {positiveFeedback}%</p>
      </div>
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
