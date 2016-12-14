import React, { Component } from 'react';
import packageJSON from '../../../package.json';
import { SuperCellIcon, HappyFaceIcon } from './icons';
import StatelessComponent from './statelessComponentExample';
import { Link } from 'react-router';

class AppIndex extends Component {
  render() {
    const version = packageJSON.version;
    const style = {
      card: {
        width: '100%',
        background: '#fff',
        borderRadius: '5px',
        WebkitBoxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        padding: '30px 40px 30px 40px',
        margin: '10px',
      },
    };
    return (
    <section className='container'>

      <div className="row">
        <div className='card' style={style.card}>
          <h1 className='logo'>SuperCell <SuperCellIcon /> version {version}</h1>
        <p>Hello, this is a <strong>ES6 React Class Component! </strong>
        <HappyFaceIcon /></p>
        </div>
      </div>

      <div className="row">
        <div className='card' style={style.card}>
          <p>I use <strong>flexbox</strong> for my layouts!
          </p>
          <p>Check out the <Link to={'/style-guide'}><strong>StyleGuide</strong></Link></p>
        </div>

        <div className='card' style={style.card}>
          <p>Links that don't match up with a URL defined in the router
          will be handled by the noMatch component.<br />
          <Link to={'/some-random-link'}><strong>Example not found link</strong></Link></p>
        </div>

        <div className='card' style={style.card}>
          <StatelessComponent phrase='React Stateless Component' />
          <SuperCellIcon />
        </div>
      </div>

    </section>
    );
  }
}

export default AppIndex;
