
import { useState } from "react";
import {Link} from "react-router-dom"
import Map from "../Components/Map";

function Create(props) {
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
    props.history.push("/")
  };

    
    return (
        <section>
            
          {props.userAuthenticated ? 
            <div className="create-div">
            <h1 className="title">New Item</h1>
          <form id="create-form" onSubmit={handleSubmit}>
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
            <div>
                <input required
                type="text"
                value={newForm.city}
                name="city"
                placeholder="city"
                onChange={handleChange}
                className="form-city"
                />
                <input required
                type="text"
                value={newForm.state}
                name="state"
                placeholder="state"
                onChange={handleChange}
                className="form-state"
                />
                <input required
                type="text"
                value={newForm.zip}
                name="zip"
                placeholder="zip"
                onChange={handleChange}
                className="form-zip"
                />  
            </div>
            <input
            type="text"
            value={newForm.img}
            name="image_url"
            placeholder="Image URL"
            onChange={handleChange}
            />

            <input className="button-primary" type="submit" value="List Item" />
          </form> </div>: <p>You must be logged in to list an Item</p>}
          
        </section>
    );
}

export default Create;

