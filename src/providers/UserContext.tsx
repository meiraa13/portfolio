import { createContext, useEffect } from "react";
import { api } from "../services/api";


interface IChildren{
    children:React.ReactNode
}
interface IUserContext {

}


export const UserContext = createContext({})

export function UserProvider({children}:IChildren){

    useEffect(()=>{
        async function loadInfo(){
            try {
                const response = await api.get('/repos')
                console.log(response.data)
                
            } catch (error) {
                console.log(error)
            }

        }   
        loadInfo()

    },[])


    return (

        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )

}