import RuleCard from '../rule-card/rule-card';

import './rule-box.scss';

const RuleBox = () => {
  return (
    <div className='rule-box'>
      <h1>Rule Box</h1>
      <div className='rule-cards'>
        <RuleCard sport='Cricket' />
        <RuleCard sport='Futsal' />
      </div>
    </div>
  );
};

export default RuleBox;
