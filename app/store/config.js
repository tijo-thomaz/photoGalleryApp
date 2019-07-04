
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
const client = axios.create({
    baseURL: 'https://randomuser.me',
    responseType: 'json'
  });
export const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
