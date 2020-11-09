import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import axios from 'axios';
import Spinner from './Spinner';
import { Container, Button } from 'react-bootstrap';

function App() {
  let [datas, setdatas] = useState('');
  let [loading, setLoading] = useState(false);
  let [darkmode, setDarkmode] = useState(null);
  let [refresh, setRefresh] = useState(false);

  let handleDarkmode = () => {
    setDarkmode((prev) => !prev);
  };
  let buttonStyle = {
    color: 'black',
    backgroundColor: 'white',
  };
  let darkStyle = {
    backgroundColor: 'darkgray',
    height: '100vh',
  };
  let lightStyle = {
    backgroundColor: 'white',
    height: '100vh',
  };
  let handleRefresh = () => {
    setLoading(false);
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    const data = setTimeout(
      () =>
        axios.get('https://randomuser.me/api/').then(function (response) {
          setdatas(response.data.results[0]);
          setLoading(true);
        }),
      1000
    );
  }, [refresh]);

  return (
    <div className="main" style={darkmode ? darkStyle : lightStyle}>
      <Container style={{ width: '300px', paddingTop: '5vh' }}>
        <div className="App" style={{ textAlign: 'center' }}>
          {loading ? (
            <Layout data={datas} mode={darkmode} />
          ) : (
            <Spinner mode={darkmode} />
          )}
        </div>
        <div>
          {loading ? (
            <Button
              onClick={() => handleDarkmode()}
              className="mt-5"
              style={darkmode ? buttonStyle : null}
            >
              Dark Mode
            </Button>
          ) : null}
        </div>
        <div>
          {loading ? (
            <Button
              onClick={() => handleRefresh()}
              className="mt-3"
              style={darkmode ? buttonStyle : null}
            >
              refresh
            </Button>
          ) : null}
        </div>
      </Container>
    </div>
  );
}

export default App;
