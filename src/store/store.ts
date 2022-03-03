import {configureStore} from '@reduxjs/toolkit';
import {apiReducer} from './api-reducer';

export const store = configureStore({
  reducer: {
    [apiReducer.reducerPath]: apiReducer.reducer,
  },
  middleware: (gDM) => gDM({
    thunk: {
      extraArgument: apiReducer,
    },
  }).concat(apiReducer.middleware),
});

