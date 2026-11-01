import { createContext, useContext, type ReactNode, useState, useEffect, useLayoutEffect } from "react"


type User = {
    name: string,
    setName: (val: string) => void,
    token: string,
    setToken: (val: string) => void
}


const userContext = createContext<User | undefined>(undefined)


export const UserContext = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState<string>('')
    const [token, setToken] = useState<string>('')

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('/islogged');

                const data = await res.json()

                if(data.name) setName(data.name)
                if(data.token) setToken(data.token)

                else{
                    console.log(data.error)
                }
            } catch (error) {
                console.log(error);
            }

        })()

    }, [])

    useLayoutEffect(() => {},[token])

    useLayoutEffect(() => {

    },[])

    return (
        <userContext.Provider value={{ name, setName, token, setToken }}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(userContext);

    if (context === undefined) {
        throw new Error('useUser must be use in UserContext.')
    }

    return context
}
