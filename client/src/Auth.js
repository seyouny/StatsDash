import React, {useEffect,useState} from "react";
import app from "./firebase.js";
import API from "./utils/API"

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        app.auth().onAuthStateChanged(function(user){
            if(user){
                var id =user.uid
                API.getUsers(id,(results)=>{
                    const newState ={
                        firstName: results.data[0].firstName,
                        userId: results.data[0].id,
                        lastName: results.data[0].lastName,
                        gamerTag: results.data[0].gamerTag,
                        platform: results.data[0].platform,
                        email: results.data[0].email

                    }
                    setCurrentUser(newState);
                })
            }
            if(!user){
                console.log("Signed out");
                setCurrentUser(null);
            }
        });
    },[]);
    return(<AuthContext.Provider 
        value ={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
        )
}