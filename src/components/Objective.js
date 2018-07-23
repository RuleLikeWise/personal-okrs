import React from 'react';
import KeyResult from './KeyResult';
import Label from './Label';

export default class Objective extends React.Component {
  static displayName = 'Objective';

  render() {
    const { title, keyResults, goals, weight, score } = this.props;
    return (
      <div className="col-xs-12 col-md-4">
        <div className="objective">
          <h2>
            <Label type="info">{score.toFixed(2)}</Label>
            {title}
          </h2>
            <Label key="weight">weight: {(weight * 100).toFixed()}%</Label>
          {goals.map((goal, key) => (
            <Label key={key}>{goal}</Label>
          ))}
          <hr />
          {keyResults.map((keyResult, key) => (
            <div className="row" key={key}>
              <KeyResult result={keyResult} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
