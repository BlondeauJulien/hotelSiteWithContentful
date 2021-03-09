import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import Hero from '../components/Hero';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
  return (
    <Fragment>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </Fragment>

  )
}

export default Rooms;
