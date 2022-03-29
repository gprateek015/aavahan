import EventCard from '../event-card/event-card';
import './event-section.scss';

const EventSection = ({ heading, events }) => {
  console.log(events.length);
  return (
    <>
      <div className='event-section'>
        <h1 className='heading' style={{ color: 'grey' }}>
          {heading}
        </h1>
        {/* <EventCard sport='Cricket' team1='CSE' team2='IT' time='12:00 pm' /> */}
        <div className='events'>
          {events.map((event, i) => (
            <EventCard {...event} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};
export default EventSection;
