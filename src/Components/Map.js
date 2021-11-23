import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';





const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map(props) {

  const containerStyle = {
    width: props.width,
    height: props.height,
  };

  const coords = props.coords;
  const markers = coords.map((ele)=>(
    <Marker
    onLoad={onLoad}
    position={ele}
    />
  )
  )
  const center = coords[0];
  return (
      <>
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_APIKEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
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