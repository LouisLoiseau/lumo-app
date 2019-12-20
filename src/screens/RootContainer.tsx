import React from 'react';
import Router from '@/navigation/index';
import { connect } from 'react-redux';
import { InternalStoreType } from '@/types/Store';
import { Dispatch } from 'redux';
const BILLY_JONES = require('@/ressources/billyJonesCourse');

interface Props {
  store: InternalStoreType;
  dispatch: Dispatch;
}

interface State {}

class RootContainer extends React.Component<Props, State> {
  componentDidMount() {
    let { store, dispatch } = this.props;
    dispatch({ type: 'SET_COURSE', data: BILLY_JONES });
  }

  render() {
    return <Router />;
  }
}

let mapStateToProps = store => {
  return { store };
}

export default connect(mapStateToProps)(RootContainer);
