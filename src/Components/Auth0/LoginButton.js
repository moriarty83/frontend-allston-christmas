import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../Styled Components/Button"

const LoginButton = () =>{
    const { loginWithRedirect } = useAuth0();
    return <Button primary onClick={()=> loginWithRedirect()}>Login</Button>
}

export default LoginButton;