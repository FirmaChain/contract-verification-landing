import React, { createContext, useState } from 'react'

export type GlobalStateContextType = {
    headerState: any
    setHeaderState: any
}

const GlobalStateContext = createContext<GlobalStateContextType | null>(null)

export const GlobalStateProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [headerState, setHeaderState] = useState(0)

    return (
        <GlobalStateContext.Provider
            value={{
                headerState,
                setHeaderState,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalStateContext
