import { createStore } from 'redux';
import reducers from './reducers/Layout';

const store = createStore(reducers);

export default store;