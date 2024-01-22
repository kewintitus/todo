// import React from 'react';
import './AppHeader.css';

const AppHeader = (props) => {
  return <h2 className="appHeader">{props.children}</h2>;
};

export default AppHeader;
