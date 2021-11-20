
import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        // image: "",
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
        // image: "",
    });
  };

    // loaded function
    const loaded = () => {
        return props.items.map((item) => (
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
            {/* <img src={item.image} alt={item.name} /> */}
            
          </div>
        ));
    };

    const loading = () => {
        return <h1> Loading... </h1>
    };
    
    return (
        <section>
          <form onSubmit={handleSubmit}>
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
            <input type="submit" value="List Item" />
          </form>
          {props.items ? loaded() : loading()}
        </section>
    );
}

export default Index;

