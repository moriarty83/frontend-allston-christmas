import { useState } from "react";
import {Link} from "react-router-dom"
import Map from "../Components/Map";

function Show(props) {
    // grab the id param from match
    const id = props.match.params.id;
    // save items standalone variable
    const items = props.items;
    // find the item to show
    const item = items.find((singleItem) => {
      return singleItem._id === id;
    });

    // state for our form
    const [editForm, setEditForm] = useState(item);

    // handleChange function for form
    const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateItems(editForm, item._id)
        // redirect Items back to index
        props.history.push("/")
    };

    const removeItem = () => {
        props.deleteItems(item._id)
        props.history.push("/")
    };

    const coords = [{
      lat: item.latitude,
      lng: item.longitude}]
    ;

    console.log(coords)

    return (
        <div className="item">
          <h1>{item.name}</h1>
          <h2>{item.address}</h2>
          <h2>{item.city}</h2>
          <h2>{item.state}</h2>
          <h2>{item.zip}</h2>

          <button onClick={removeItem} id="delete">
            DELETE
          </button>
          {props.userAuthenticated ? 
          <form onSubmit={handleSubmit}>
          <input type="submit" value="UPDATE"/>
          <input required
              type="text"
              value={editForm.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={editForm.description}
              name="description"
              placeholder="item description"
              onChange={handleChange}
            />
            <input required
              type="date"
              value={editForm.trashDay}
              name="trashDay"
              placeholder="trashDay"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={editForm.address}
              name="address"
              placeholder="address"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={editForm.city}
              name="city"
              placeholder="city"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={editForm.state}
              name="state"
              placeholder="state"
              onChange={handleChange}
            />
            <input required
              type="text"
              value={editForm.zip}
              name="zip"
              placeholder="zip"
              onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.image_url}
            name="image_url"
            placeholder="Image URL"
            onChange={handleChange}
            />
            
            <input type="checkbox" id="" name="Available" value="Available" />Available

          </form> : '' }

          <img className="show-image" src={item.image_url} alt={item.name} />
          <Map coords={coords} />
          
        </div>
      );
};

export default Show;