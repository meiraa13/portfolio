import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface IChildren{
    children:React.ReactNode
}
interface IUserContext {
    repos:any,
    setRepos:React.Dispatch<any>

}


export const UserContext = createContext({} as IUserContext)

export function UserProvider({children}:IChildren){

    const [repos, setRepos] = useState<any>(null)

    useEffect(()=>{
        async function loadInfo(){
            try {
                const response = await api.get('/repos')
                console.log(response.data)
                setRepos(response.data)
                
            } catch (error) {
                console.log(error)
            }

        }   
        loadInfo()

    },[])


    return (

        <UserContext.Provider value={{repos, setRepos }}>
            {children}
        </UserContext.Provider>
    )

}