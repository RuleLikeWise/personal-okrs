import React from 'react';
import Objective from './Objective';
import 'bootstrap/dist/css/bootstrap-flex.min.css';
import '../global.css';
import logoUrl from '../parsys.svg';
import Label from './Label';
import { dataPreprocess } from '../modals/preprocess';
import defaultOkrs from '../modals/okrs.json';

const Okrs = ({ match }) => {
  let okrs = null;
  switch (match.params.quarter) {
    case 'index':
      okrs = defaultOkrs;
      break;
    default:
      okrs = defaultOkrs;
      break;
  }

  if (!okrs) {
    return <div><h1>cannot find okrs</h1></div>;
  }

  const newData = dataPreprocess(okrs);
  return <div className="container-fluid">
    <div className="row">
      <div className="inline col-xs">
        <img src={ logoUrl } className="img-fluid logo" style={{ visibility: 'hidden' }}/>
        <h1 className="title">{ newData.title }
          <Label type="info">{newData.score.toFixed(2)}</Label></h1>
      </div>
    </div>
    <div className="row">
      {newData.objectives.map((objective, key) => (
          <Objective
              key={key}
              title={objective.name}
              keyResults={objective.results}
              goals={objective.okrs}
              weight={objective.weight}
              score={objective.score}/>
      ))}
    </div>
  </div>;
};

export default Okrs;
