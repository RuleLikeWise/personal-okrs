// calc weights of each key result
function krWeight(keyResults) {
  const total = keyResults.reduce((weight, keyResult) => {
    if (!keyResult.weight) {
      return weight;
    }
    return weight + keyResult.weight;
  }, 0);
  return keyResults.map(keyResult => {
    const newKeyResult = { ...keyResult };
    newKeyResult.weight = (total === 0) ? 0 : keyResult.weight / total;
    return newKeyResult;
  });
}

// calc weights of each objective
function objectivesWeight(objectives) {
  const total = objectives.reduce((weight, objective) => {
    if (!objective.weight) {
      return weight;
    }
    return weight + objective.weight;
  }, 0);
  return objectives.map(objective => {
    const newObjective = { ...objective };
    newObjective.weight = (total === 0) ? 0 : objective.weight / total;
    newObjective.results = krWeight(newObjective.results);
    newObjective.score = newObjective.results.reduce((score, keyResult) => {
      if (!keyResult.score) {
        return score;
      }
      return score + (parseFloat(keyResult.score) * keyResult.weight);
    }, 0);
    return newObjective;
  });
}

// data preprocess
export function dataPreprocess(okr) {
  const newOkr = { ...okr };
  newOkr.objectives = objectivesWeight(newOkr.objectives);
  newOkr.score = newOkr.objectives.reduce((score, objective) => {
    if (!objective.score) {
      return score;
    }
    return score + (parseFloat(objective.score) * objective.weight);
  }, 0);
  return newOkr;
}
