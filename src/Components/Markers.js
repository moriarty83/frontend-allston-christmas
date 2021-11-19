import React from 'react'
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_APIKEY)
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");

const addresses = [
    "Reading, MA",
    "6 South St., Jamaica Plain, MA 02130",
    "02494"
]

const coordsArr = addresses.map((address)=>{

        Geocode.fromAddress(address).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              return {lat, lng};
            },
            (error) => {
              console.error(error);
            }
          );
})

function Markers (props){
    return
}