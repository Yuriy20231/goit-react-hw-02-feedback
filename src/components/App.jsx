import React from 'react';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOption/FeedbackOption';
import { Section } from './Section/Section';
import css from './App.module.css'

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.floor((good / (good + neutral + bad)) * 100 || 0);
  };

  render() {
    const total = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={PositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default App;