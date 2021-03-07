import React, { Component } from 'react';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, repellendus.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, repellendus.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, repellendus.'
      },
      {
        icon: <FaBeer />,
        title: 'Best Beers',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, repellendus.'
      }
    ]
  }

  render() {
    return (
      <section className="services">

        <Title title="services" />

        <div className="services-center">

          { this.state.services.map( ( item, i ) => {
              return (
                <article key={i} className="service">
                  <span>{ item.icon }</span>
                  <h6>{ item.title }</h6>
                  <p>{ item.info }</p>
                </article> )
          })}

        </div>

      </section>
    )
  }
}

