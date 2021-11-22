import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const addresses = [
    "Reading, MA",
    "6 South St., Jamaica Plain, MA 02130",
    "02494"
]


const containerStyle = {
  width: window.innerWidth*.6,
  height: window.innerWidth*.6
};



const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map(props) {
  console.log("props: ", props)
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