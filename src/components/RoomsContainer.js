import { Fragment } from 'react';

import RoomFilter from './RoomFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { withRoomConsumer } from '../context';

const RoomsContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;

  if(loading) {
    return <Loading />
  }

  return (
    <Fragment>
      <RoomFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </Fragment>
  )
}

export default withRoomConsumer(RoomsContainer);





/* import React from 'react';

import RoomFilter from './RoomFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { RoomConsumer } from '../context';

const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;

        if(loading) {
          return <Loading />
        }

        return (
          <div>
            hello rooms container
            <RoomFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        )
      }}

    </RoomConsumer>
  )
}

export default RoomsContainer; */
