import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback(prevState =>
      Object.keys(prevState).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
      }, {})
    );
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedback = (totalFeedback, good) => {
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedback(totalFeedback, feedback.good);

  return (
    <>
      <Description />
      <Options
        options={Object.keys(feedback)}
        onClick={updateFeedback}
        onReset={handleReset}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};

export default App;
