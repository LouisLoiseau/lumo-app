import React from 'react';
import Router from "@/navigation/index";
import { Provider } from 'react-redux';
import { courseStore } from '@/stores';

export default function App() {
  return (
    <Provider store={courseStore}>
      <Router />
    </Provider>
  );
}
