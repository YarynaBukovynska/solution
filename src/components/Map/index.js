import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { useDispatch } from 'react-redux';
import { loadData } from '../store/actions';
import { INITIAL_VIEWPORT, TODAY, TOKEN } from './constants';
import MarkerItem from '../MarkerItem';
import MAP_STYLE from './styles.json';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({ markers }) => {
  const dispatch = useDispatch();
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

  useEffect(() => {
    dispatch(loadData(TODAY()))
  }, [dispatch]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={setViewport}
      mapStyle={MAP_STYLE}
    > 
      {markers.map(marker => (
        <MarkerItem key={marker.id} marker={marker} />
      ))}
    </ReactMapGL>
  );
};

export default Map;
