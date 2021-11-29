import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const onLoad = marker => {
    
  }

function Map(props) {


  const containerStyle = {
    width: props.width,
    height: props.height,
  };

  const coords = props.coords;
  const markers = coords.map((ele, index)=>(
    <Marker key={index}
    onLoad={onLoad}
    position={ele}
    />
  )
  )
  const center = props.center ? props.center : coords[0];
  const zoom = props.zoom ? props.zoom : 12;

  return (
      <>
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_APIKEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
          {markers}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </>
  )
}

export default React.memo(Map)