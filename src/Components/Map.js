import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const addresses = [
    "Reading, MA",
    "6 South St., Jamaica Plain, MA 02130",
    "02494"
]


const containerStyle = {
  width: '400px',
  height: '400px'
};



const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map(props) {
  const center = props.center;
  return (
      <>
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_APIKEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
          <Marker
          onLoad={onLoad}
          position={center}
          />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </>
  )
}

export default React.memo(Map)