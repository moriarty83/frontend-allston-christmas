import { useState, useEffect} from "react";
import {Link} from "react-router-dom";


function UserItems(props){
const [userItems, setUserItems] = useState(null);
console.log(props.email)

const URL = "https://allston-christmas.herokuapp.com/api/profile/";

const getUserItems = async () => {
    const response = await fetch(URL+props.email);
    const data = await response.json();
    setUserItems(data);
};

const today = new Date();
console.log("today: ", today)
const loaded = () => {
    const currentArr = userItems.filter((item)=> Date.parse(item.trashDay) > today)
    const pastArr = userItems.filter((item)=> Date.parse(item.trashDay) < today)
    console.log("Current Arr", currentArr);
    const currentItems = currentArr.map((item) => {         
    return(
      
      <div key={item._id} className="item">
        <Link to={`/items/${item._id}`}><h1>{item.name}</h1></Link>
        {/* <h3>{item.description}</h3> */}
        <h3>{item.address}</h3>
        <h3>{(item.trashDay).slice(0,10)}</h3>
        <h3>{item.city}, {item.state}</h3>

        <h3>{item.zip}</h3>
        {/* <h3>{item.latitude}</h3>
        <h3>{item.longitude}</h3> */}
        <img src={item.image_url} alt={item.name} />
        
      </div>
    )}
    );

    const pastItems = pastArr.map((item) => {         
        return(
          
          <div key={item._id} className="item">
            <Link to={`/items/${item._id}`}><h1>{item.name}</h1></Link>
            {/* <h3>{item.description}</h3> */}
            <h3>{item.address}</h3>
            <h3>{(item.trashDay).slice(0,10)}</h3>
            <h3>{item.city}, {item.state}</h3>
    
            <h3>{item.zip}</h3>
            {/* <h3>{item.latitude}</h3>
            <h3>{item.longitude}</h3> */}
            <img src={item.image_url} alt={item.name} />
            
          </div>
        )}
    );

    return (<>
    <h1 className="title">Current Items</h1>
    <div className="items-div">{currentItems}</div>
    <h1 className="title">Past Items</h1>
    <div className="items-div">{pastItems}</div>
    </>)
};

const loading = () => {
    return <h1> Loading... </h1>
};


useEffect(() => getUserItems(), []);

return userItems ? loaded() : loading()}



export default UserItems

