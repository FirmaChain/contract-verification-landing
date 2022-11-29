import { Box } from '@mui/material'
import useGlobalState from '../../hooks/useGlobalState'

const MobileGNBShade = () => {
    const { mobileHeaderOpen } = useGlobalState()
    return (
        <Box
            sx={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                backgroundColor: mobileHeaderOpen ? '#000' : 'transparent',
                zIndex: mobileHeaderOpen ? 10 : 0,
                opacity: '0.5',
            }}
        />
    )
}

export default MobileGNBShade
