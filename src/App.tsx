import React, { useEffect } from 'react';
import logo from './logo.svg';
import { setMissions } from './redux/actions/missions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LeavingArrivingBloomers from './components/missions/leavingArrivingBloomers';

function App(props: any) {
  const { actions, missionsData } = props

  useEffect(() => {
    actions.setMissions()
  }, [])

  return (
    <div className="App">
      {missionsData.length ? <LeavingArrivingBloomers missions={missionsData} />: null}
    </div>
  );
}
const mapStateToProps = (state: any) => ({
  missionsData: state.missions.data
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    setMissions: async () => dispatch(await setMissions())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
