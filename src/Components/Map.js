import React from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


// const addresses = [
//     "Reading, MA",
//     "6 South St., Jamaica Plain, MA 02130",
//     "02494"
// ]



// const coordsArr = addresses.map((address)=>{
//         Geocode.fromAddress(address).then(
//             (response) => {
//               const { lat, lng } = response.results[0].geometry.location;
//               console.log(lat, lng);

//             },
//             (error) => {
//               console.error(error);
//             }
//           );
    
// })

// console.log(coordsArr);

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
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
    <div>
        <h1>Coords</h1>
        <h2>{coordsArr}</h2>
    </div>
    </>
  )
}

export default React.memo(Map)