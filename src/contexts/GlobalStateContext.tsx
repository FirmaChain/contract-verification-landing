import React, { createContext, useState } from 'react'

export type GlobalStateContextType = {
    headerState: any
    setHeaderState: any
    mobileHeaderOpen: any
    setMobileHeaderOpen: any
}

const GlobalStateContext = createContext<GlobalStateContextType | null>(null)

export const GlobalStateProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [headerState, setHeaderState] = useState(0)
    const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false)

    return (
        <GlobalStateContext.Provider
            value={{
                headerState,
                setHeaderState,
                mobileHeaderOpen,
                setMobileHeaderOpen,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalStateContext
