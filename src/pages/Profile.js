import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserItems from "../Components/UserItems";

const Profile = () =>{
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading){
        return <div className>Loading your info</div>
    }

    return(
        isAuthenticated && (
            <>
            <div className="items-div">
                <div className="profile">
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    {/* <p>{user.email}</p> */}
                </div>
            </div>
                <UserItems email={user.email}/>
            </>
            
        )
    );
};

export default Profile;