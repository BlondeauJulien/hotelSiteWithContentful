import React, { Component, createContext } from 'react';

const RoomContext = createContext();

export default class RoomProvider extends Component {
  state={}

  render() {
    return (
      <RoomContext.Provider value="hello">
        { this.props.children }
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }