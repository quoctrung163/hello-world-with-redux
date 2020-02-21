import { createStore } from 'redux';
import reducer from '../reducers/index';
const initialState = { tech: 'Redux' };

const store = createStore(reducer, initialState);

export { store };
