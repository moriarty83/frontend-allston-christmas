
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
            <h3>{item.description}</h3>
            <h3>{item.address}</h3>
            <h3>{(item.trashDay).slice(0,10)}</h3>
            <h3>{item.city}</h3>
            <h3>{item.state}</h3>
            <h3>{item.zip}</h3>
            {/* <h3>{item.latitude}</h3>
            <h3>{item.longitude}</h3> */}
            <img src={item.image} alt={item.name} />
            
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

          {props.userAuthenticated ? 

          <form onSubmit={handleSubmit}>
            <input type="submit" value="List Item" />
            <input required
              type="text"
              value={newForm.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={newForm.description}
              name="description"
              placeholder="item description"
              onChange={handleChange}
            />
            <input required
              type="date"
              value={newForm.trashDay}
              name="trashDay"
              placeholder="trashDay"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={newForm.address}
              name="address"
              placeholder="address"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={newForm.city}
              name="city"
              placeholder="city"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={newForm.state}
              name="state"
              placeholder="state"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={newForm.zip}
              name="zip"
              placeholder="zip"
              onChange={handleChange}
            />

            <input
            type="text"
            value={newForm.img}
            name="img url"
            placeholder="img url"
            onChange={handleChange}
            />

            <input type="submit" value="List Item" />
          </form> : <p>Login to list an item</p>}

          {props.items ? loaded() : loading()}
          <Map coords={coords} />
        </section>
    );
}

export default Index;

