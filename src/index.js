import React from 'react';
import { render } from 'react-dom';
import Objective from './components/Objective';
import data from './okrs.json';
import 'bootstrap/dist/css/bootstrap-flex.min.css';
import './global.css';
import logoUrl from './parsys.svg';
import Label from './components/Label';
import { dataPreprocess } from './modals/preprocess';

const newData = dataPreprocess(data);

render((
  <div className="container-fluid">
    <div className="row">
      <div className="inline col-xs">
        <img src={ logoUrl } className="img-fluid logo" style={ { visibility: 'hidden' } } />
        <h1 className="title">ParSys OKR Dashboard
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
  </div>
), document.getElementById('root'));
