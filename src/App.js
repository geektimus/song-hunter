import React, { Component } from 'react';
import SongAdder from './components/songs-adder';
import SongRanker from './components/song-ranker';
import MyNavbar from './components/navbar';

import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducers';
import { Provider } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MyNavbar />
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <SongAdder />
                <SongRanker />
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
