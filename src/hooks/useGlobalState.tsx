import React, { useContext } from 'react'
import GlobalStateContext from '../contexts/GlobalStateContext'

const useGlobalState = () => {
    const context = useContext(GlobalStateContext)

    if (!context) throw new Error('global context not exist')

    return context
}

export default useGlobalState
