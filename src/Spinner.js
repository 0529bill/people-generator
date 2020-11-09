import React from 'react';

import './Spinner.css';

function Spinner() {
  return (
    <>
      <div
        style={{ textAlign: 'center', marginTop: '30vh' }}
        className="spinner"
      >
        <i className="fa fa-spinner" aria-hidden="true"></i>
      </div>
      <div className="mt-3">
        <p>Refresh the window if it's spinning too long</p>
      </div>
    </>
  );
}
export default Spinner;
