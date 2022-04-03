import {createContext, useEffect } from "react";
import { useState } from "react";
import { ENDPOINT, SUC, FAIL, USER_KEY } from '../helpers/globalVars';
import useLocalStorage from "../hooks/useLocalStorage";

export const UserContext = createContext();


export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [userLocalStorage, setUserLocalStorage] = useLocalStorage(USER_KEY, null);


    let res;

    const fetchUser = async (email) => {
        try{
            const response = await fetch(`${ENDPOINT}/user/${email}`);
            const data = await response.json();
            return data.recordset[0];
          }catch(error){
            return error
          }
    }

    const getLogedInUser = async (email) => {
        // there is no user logged in
        console.log(useLocalStorage)
        if(userLocalStorage === null) return res = {status: SUC, user: null} ;
        // User is already set on variable (meaning user hasnt refreshed the page so ots still saved in user state var)
        console.log(user)
        if (user !== null) return res = {status: SUC, user: user} ;;

        try{
            const response = await fetch(`${ENDPOINT}/user/${email}`);
            const data = await response.json();
            console.log(data)
            setUser(data.recordset[0])
            return res = {status: SUC, user: data.recordset[0]} ;
          }catch(error){
            return res = {status: FAIL, message: error.message}
          }
    }

    const signOut =  () => {
        setUser(null)
        setUserLocalStorage(null)
    };

    const signIn = async (email, password) => {
        try{
            const user = await fetchUser(email)
            if(user == undefined || user == null){
                res = {status: FAIL, message: "There is no user with this email"}
            }else if(password == user.password){
                setUser(user);
                setUserLocalStorage(user)
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
                getLogedInUser,
                userLocalStorage,
                signIn, 
                signOut
                }}>
            {children}
        </UserContext.Provider>
    );
}