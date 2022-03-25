import EventSection from '../../components/event-section/event-section';

import './events.scss';

const EventPage = () => {
  return (
    <>
      <EventSection heading='1st Day' theme='dark' />
      <EventSection heading='2nd Day' theme='light' />
      <EventSection heading='3rd Day' theme='dark' />
      <EventSection heading='DJ Night' theme='light' />
    </>
  );
};

export default EventPage;
