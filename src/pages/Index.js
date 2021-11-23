
import { useState } from "react";
import {Link} from "react-router-dom"
import Map from "../Components/Map";

function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        description: "",
        address: "",
        latitude: "",
        longitude: "",
        trashDay: "",
        city: "",
        state: "",
        zip: "",
    });
    
    // state to hold Coordinates Array
    const coords = [];

    // handleChange function for form
    const handleChange = (event) => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

      // handle submit function for form
    const handleSubmit = (event) => {
    event.preventDefault();
    props.createItems(newForm);
    setNewForm({
        name: "",
        description: "",
        trashDay: "",
        address: "",        
        city: "", 
        state: "", 
        zip: "",
        // latitude: "",
        // longitude: "",
        image: "",
    });
  };

    // loaded function
    const loaded = () => {
      
        
        const items = props.items.map((item) => {  
          coords.push({
            lat: item.latitude,
            lng: item.longitude})        
        return(
          
          <div key={item._id} className="item">
            <Link to={`/items/${item._id}`}><h1>{item.name}</h1></Link>
            {/* <h3>{item.description}</h3> */}
            {/* <h3>{item.address}</h3> */}
            {/* <h3>{(item.trashDay).slice(0,10)}</h3> */}
            <h3>{item.city}, {item.state}</h3>

            {/* <h3>{item.zip}</h3> */}
            {/* <h3>{item.latitude}</h3>
            <h3>{item.longitude}</h3> */}
            <img src={item.image_url} alt={item.name} />
            
          </div>
        )}
        );

        return (items)
    };
    
    const loading = () => {
        return <h1> Loading... </h1>
    };
    
    return (
        <section>
          <div className="index-div">
          <div className="map-div">
              <Map coords={coords} width={window.innerWidth*.6} height={window.innerWidth*.6}/>
            </div>
            <div className="items-div">
            {props.items ? loaded() : loading()}
            </div>

          </div>
        </section>
    );
}

export default Index;

