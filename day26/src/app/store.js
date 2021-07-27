import {  createStore } from '@reduxjs/toolkit';
import rootReducer from '../features/rootReducer';

export const store = createStore(rootReducer);
