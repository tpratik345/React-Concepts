import { createContext, useState } from "react"

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderPropsTypes = {
    children: React.ReactNode
}

type AuthUser = {
    name: string
    email: string
}

// export const UserContext = createContext<UserContextPropsType | null>(null);
export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderPropsTypes) {
    const [user, setUser] = useState<AuthUser | null>(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}