import React from 'react';
import Router from "@/navigation/index";
import store from '@/store/index';
import { Provider } from 'mobx-react';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
