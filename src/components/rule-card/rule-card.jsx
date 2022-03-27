import { useState } from 'react';

import rules from './rules';

import './rule-card.scss';

const Rules = ({ setShowRuleBox, sport }) => {
  console.log(sport);
  return (
    <div className='sport-rule-box' onClick={() => setShowRuleBox(false)}>
      <div className='rules' onClick={e => e.stopPropagation()}>
        <div className='ruless'>
          <h1>Boys</h1>
          <ul>
            {rules[sport]['boys'].map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
          <h1>Girls</h1>
          <ul>
            {rules[sport]['girls'].map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const RuleCard = ({ sport }) => {
  const [showRuleBox, setShowRuleBox] = useState(false);
  return !showRuleBox ? (
    <div className='rule-card'>
      <div className='rule-card-details' onClick={() => setShowRuleBox(true)}>
        {sport}
      </div>
    </div>
  ) : (
    <Rules setShowRuleBox={setShowRuleBox} sport={sport.toLowerCase()} />
  );
};

export default RuleCard;
