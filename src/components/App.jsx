import { Component } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      this.setState(savedFeedback);
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('feedback', JSON.stringify(this.state));
    }
  }

  updateFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedback = (totalFeedback, good) => {
    return Math.round((good / totalFeedback) * 100);
  };

  handleReset = () => {
    this.setState(prevState =>
      Object.keys(prevState).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
      }, {})
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = totalFeedback ? this.countPositiveFeedback(totalFeedback, good) : 0;

    return (
      <>
        <Description />
        <Options
          options={options}
          onClick={this.updateFeedback}
          onReset={this.handleReset}
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
  }
}

export default App;
