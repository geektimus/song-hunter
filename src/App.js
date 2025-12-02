import React, { Component } from 'react';
import SongAdder from './components/songs-adder';
import SongRanker from './components/song-ranker';
import MyNavbar from './components/navbar';
import { ThemeProvider } from './context/ThemeContext';

import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducers';
import { Provider } from 'react-redux';

import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
            <MyNavbar />
            <div className="container mx-auto px-4 py-10">
              <SongAdder />
              <SongRanker />
            </div>
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
