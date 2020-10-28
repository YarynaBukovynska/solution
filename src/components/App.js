import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import './App.css';
import Sidebar from './sidebar';

const App = ({ markers }) => {
  const markersMemoized = useMemo(() => markers, [markers]);
  return (
    <div className="App">
      <Sidebar markers={markersMemoized} />
      <Map markers={markersMemoized} />
    </div>
  );
};

const mapStateToProps = state => ({
  markers: state.markers.markers
});

export default connect(mapStateToProps)(App);
