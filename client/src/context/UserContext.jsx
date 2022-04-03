import {createContext, useEffect } from "react";
import { useState } from "react";
import { ENDPOINT, SUC, FAIL, USER_KEY } from '../helpers/globalVars';
import useLocalStorage from "../hooks/useLocalStorage";

export const UserContext = createContext();


export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [userLocalStorage, setUserLocalStorage] = useLocalStorage(USER_KEY, null);


    let res;

    const getUser = async (email) => {
        let data
        try{
            const response = await fetch(`${ENDPOINT}/user/${email}`);
            const data = await response.json();
            console.log(data.recordset[0])
            return data.recordset[0];
          }catch(error){
            return error
          }
    }

    const signOut =  () => {
        setUser(null)
        setUserLocalStorage(null)
        alert("goodbye")
    };

    const signIn = async (email, password) => {
        try{
            const user = await getUser(email)
            if(user == undefined || user == null){
                res = {status: FAIL, message: "There is no user with this email"}
            }else if(password == user.password){
                setUser(user);
                setUserLocalStorage(user._id)
                res = {status: SUC}
            }else{
                res = {status: FAIL, message: "Username or password are incorrect"}
            }
          }catch(error){
            res = {status: FAIL, message: error.message}
          }
          return res;
    }

    return (
        <UserContext.Provider 
            value={{
                user,
                userLocalStorage,
                signIn, 
                signOut
                }}>
            {children}
        </UserContext.Provider>
    );
}