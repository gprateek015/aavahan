import './event-section.scss';

const EventSection = ({ heading, theme }) => {
  return (
    <div
      style={{ background: `${theme === 'dark' ? 'grey' : 'white'}` }}
      className='event-section'
    >
      <h1
        className='heading'
        style={{ color: `${theme === 'dark' ? 'white' : 'grey'}` }}
      >
        {heading}
      </h1>
    </div>
  );
};
export default EventSection;
