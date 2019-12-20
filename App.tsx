import React from 'react';
import Router from "@/navigation/index";
import { Provider } from 'react-redux';
import { courseStore } from '@/stores';
import RootContainer from '@/screens/RootContainer';

export default function App() {
  return (
    <Provider store={courseStore}>
      <RootContainer />
    </Provider>
  );
}
