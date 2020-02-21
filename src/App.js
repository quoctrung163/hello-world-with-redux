import React, { Component } from 'react';
import HelloWorld from './Hello';
import { store } from './stores/techStore';

export default class App extends Component {
	state = store.getState();
	// the state object has been removed.
	render() {
		return <HelloWorld tech={this.state.tech} />;
	}
}
