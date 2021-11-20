import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Header from "./Header";
import Footer from "./Footer";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [items, setItems] = useState(null);

    const URL = "https://allston-christmas.herokuapp.com/api/items/";

    const getItems = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setItems(data);
    };

    const createItems = async (item) => {
        console.log(typeof(item.zip))
        await fetch(URL, {
            method:"post",
            headers: {
                "Content-Type": "application/json",
            },
            
            body: JSON.stringify(item),
            
            
        });
        
        getItems();
    };

    const updateItems = async (item, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        getItems();
    };

    const deleteItems = async (id) => {
        // make the delete request
        await fetch(URL + id, {
          method: "delete"
        });
        getItems();
    };
    
    useEffect(() => getItems(), []);

    const { isAuthenticated } = useAuth0();
    const userAuthenticated =  isAuthenticated ? true : false;


    console.log(userAuthenticated)

    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/">
            <Index items={items} createItems={createItems} userAuthenticated={userAuthenticated}/>
          </Route>
          <Route
            path="/items/:id"
            render={(rp) => (
              <Show 
                {...rp}
                items={items}
                updateItems={updateItems}
                deleteItems={deleteItems}
                userAuthenticated={userAuthenticated}
              />
            )}
          />
        </Switch>
        <Footer />
      </main>
    );
};


export default Main;
