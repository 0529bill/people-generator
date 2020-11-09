import React from 'react';

import './Layout.css';

function Layout(props) {
  let darkStyle = {
    filter: 'contrast(0.7)',
    backgroundColor: 'cornsilk',
    borderStyle: 'solid',
    paddingTop: '5vh',
    paddingBottom: '5vh',
  };

  let lightStyle = {
    filter: 'contrast(0.7)',
    backgroundColor: 'white',
    borderStyle: 'solid',
    paddingTop: '5vh',
    paddingBottom: '5vh',
  };

  return (
    <div className="layout" style={props.mode ? lightStyle : darkStyle}>
      <div>Gender: {props.data.gender}</div>
      <div>Name: {props.data.name.first + ' ' + props.data.name.last}</div>
      <div>location: {props.data.location.city}</div>
      <img className="layout__img" src={props.data.picture.large}></img>
    </div>
  );
}

export default Layout;
