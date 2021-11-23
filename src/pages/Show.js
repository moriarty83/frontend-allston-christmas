import { useState, useEffect } from "react";
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

    // state for showing/hiding the form
    const [editOn, setEditOn] = useState(false);

    // handleChange function for form
    const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    const toggleEdit = () =>{
      setEditOn(!editOn)
    }

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

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
    
        <div className="show-item">
          <h1>{item.name}</h1>
          <div className="item-info">
            <img className="show-image" src={item.image_url} alt={item.name} />


            <div className="item-detail">
              <div className={editOn ? "text hidden" : "text"}>
              <h2>{item.address} </h2>
              <h2>{item.city}, {item.state} {item.zip}</h2>
              <p>{item.description}</p>
              <p>Trash Date: {(item.trashDay).slice(0,10)}</p>

              
              {props.userAuthenticated ? <button onClick={toggleEdit}>Edit Item</button> : ''}
              </div>
              <div className={editOn ? "item-actions" : "item-actions hidden"} >
            {props.userAuthenticated ? <>
            <form className="update-form" onSubmit={handleSubmit}>
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
              <div className="city-state-zip-update">
              <input required
                type="text"
                value={editForm.city}
                name="city"
                placeholder="city"
                onChange={handleChange}
                className="form-city"
              />
              <input required
                type="text"
                value={editForm.state}
                name="state"
                placeholder="state"
                onChange={handleChange}
                className="form-state"
              />
              <input required
                type="text"
                value={editForm.zip}
                name="zip"
                placeholder="zip"
                onChange={handleChange}
                className="form-zip"
              />
              </div>
              <input
              type="text"
              value={editForm.image_url}
              name="image_url"
              placeholder="Image URL"
              onChange={handleChange}
              />
              <input type="submit" value="UPDATE"/>
              <button onClick={toggleEdit} id="cancel">
                    Cancel
                  </button>
              </form> 
                    <button onClick={removeItem} id="delete">
                    DELETE
                  </button> </>: '' }
              </div>
            </div>
          </div>
          <div className="map-div">
            <Map coords={coords} width="20em" height="20em" />
          </div>

        </div>
      );
};

export default Show;