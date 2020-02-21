import React, { Component } from 'react';
import HelloWorld from './Hello';
import { createStore } from 'redux';
import reducer from './reducers/index';

const initialState = { tech: 'Redux' };
const store = createStore(reducer, initialState);

export default class App extends Component {
	// the state object has been removed.
	render() {
		return <HelloWorld tech={store.getState().tech} />;
	}
}
