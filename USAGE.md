# Usage

## Data structure of json files in `src/modals`

| id | type | description |
| --- | --- | --- |
| title | string | title of OKRs |
| objectives | array&lt;hash&gt; | all objectives |

### One of objectives

| id | type | description |
| --- | --- | --- |
| name | string | name of this objective |
| okrs | array&lt;string&gt; | labels of this objective |
| weight | number | weight of this objective |
| results | array&lt;hash&gt; | key results of this objective |

#### One of results

| id | type | description |
| --- | --- | --- |
| name | string | name of this key result |
| description | string | description of this key result |
| progress | number or array&lt;hash&gt; | progress of this key result |
| weight | number | weight of this key result |
| score | null or string | score of this key result|
| scoring | array&lt;hash&gt; | scoring option of this key result |

##### One of process

|  | type | description |
| --- | --- | --- |
| key | string | name of this process |
| value | number | degree of completion of this process |

##### One of scoring

|  | type | description |
| --- | --- | --- |
| key | string | score of this scoring option |
| value | string | description of this scoring option |

## Add json file of new OKRs

For example:

Write a json file of new OKRs with name `201803.json` in `src/modals`

``` javascript
// modify src/components/Okrs.js

// ... some code

import okrs201803 from '../modals/okrs.json'; // add this line

// ... some code

switch (match.params.quarter) {
    case 'index':
      okrs = defaultOkrs;
      break;

    // add 3 lines below
    case '201803':
      okrs = okrs201803;
      break;

    default:
      okrs = defaultOkrs;
      break;
}

// ... some code
```
