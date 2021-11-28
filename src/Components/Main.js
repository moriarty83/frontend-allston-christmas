import { useEffect, useState, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import { user, useAuth0 } from '@auth0/auth0-react';
import Header from "./Header";
import Footer from "./Footer";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Profile from "../pages/Profile";
import Create from "../pages/Create";
import About from "../pages/About";

function Main(props) {
    // Ref is used to close the menu.
    const ref = useRef()

    const [items, setItems] = useState(null);

    const [menuOn, setMenuOn] = useState(false)

    // Code thanks to: https://www.codingdeft.com/posts/react-on-click-outside/
    const menuOff = (event) =>{
    }
    

    // AUTH0 ITEMS
    const { user, isAuthenticated } = useAuth0();
    const userAuthenticated =  isAuthenticated ? true : false;

    const URL = "https://allston-christmas.herokuapp.com/api/items/";

    const getItems = async () => {
        const response = await fetch(URL+"current");
        const data = await response.json();
        setItems(data);
    };

    const createItems = async (item) => {
        item.user_email = user.email;
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

    return (
      <main ref={ref} onClick={menuOff}>
        <Header menuOn={menuOn} setMenuOn={setMenuOn} userAuthenticated={userAuthenticated}/>
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
                user = {user}
              />
            )}
          />
          <Route
            path="/profile"
            render={(rp) => (
              <Profile 
                {...rp}
                items={items}
                userAuthenticated={userAuthenticated}
                user = {user}
                
                />
              )}
          />
            <Route
            path="/create"
            render={(rp) => (
              <Create 
                {...rp}
                createItems={createItems}
                userAuthenticated={userAuthenticated}
                />
                
              )}
            />

          <Route
          path="/about"
          render={(rp) => (
            <About 
              {...rp}
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
