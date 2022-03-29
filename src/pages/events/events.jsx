import EventSection from '../../components/event-section/event-section';

import img0 from '../../assets/galaxy.png';
import bgmain from '../../assets/bgmain3.png';

import './events.scss';
import Footer from '../../components/footer/Footer';

const DJ_Night = ({ heading }) => (
  <div className='dj-night'>
    <h1 className='heading' style={{ color: 'grey' }}>
      {heading}
    </h1>
    <div className='EventVideo'>
      <iframe
        width='480'
        height='300'
        src='https://www.youtube.com/embed/ideEAks0ZF0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  </div>
);

const EventPage = () => {
  const events_day1 = [
    {
      sport: 'Cricket',
      team1: 'CSE',
      team2: 'IT',
      time: '12:00 pm'
    },
    {
      sport: 'Futsal',
      team1: 'EE',
      team2: 'ME',
      time: '2:00 pm'
    },
    {
      sport: 'Volleyball',
      team1: 'CIVIL',
      team2: 'EC',
      time: '4:00 pm'
    }
  ];
  const events_day2 = [
    {
      sport: 'Basketball',
      team1: 'IP',
      team2: 'CSE',
      time: '12:00 pm'
    },
    {
      sport: 'Badminton',
      team1: 'EE',
      team2: 'IT',
      time: '2:00 pm'
    },
    {
      sport: 'Khokho',
      team1: 'ME',
      team2: 'CIVIL',
      time: '4:00 pm'
    }
  ];
  const events_day3 = [
    {
      sport: 'Chess',
      team1: 'CSE',
      team2: 'CIVIL',
      time: '12:00 pm'
    },
    {
      sport: 'Table Tennis',
      team1: 'ME',
      team2: 'IT',
      time: '2:00 pm'
    },
    {
      sport: 'BGMI',
      team1: 'EE',
      team2: 'IP',
      time: '4:00 pm'
    }
  ];
  return (
    <>
      <div id='Events'></div>
      <img src={img0} alt='' id='Rbg' />
      <img src={bgmain} alt='' id='Rbg2' />
      <div className='EventVideo'>
        <iframe
          width='480'
          height='300'
          src='https://www.youtube.com/embed/ideEAks0ZF0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>

      <EventSection heading='1st Day' events={events_day1} />
      <EventSection heading='2nd Day' events={events_day2} />
      <EventSection heading='3rd Day' events={events_day3} />
      <DJ_Night heading='DJ Night' />

      <Footer />
    </>
  );
};

export default EventPage;
