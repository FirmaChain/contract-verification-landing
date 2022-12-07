import { Box } from '@mui/material'
import useGlobalState from '../../hooks/useGlobalState'

const MobileGNBShade = () => {
    const { mobileHeaderOpen, setMobileHeaderOpen } = useGlobalState()
    return (
        <Box
            onClick={() => setMobileHeaderOpen(false)}
            sx={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                backgroundColor: mobileHeaderOpen ? '#000' : 'transparent',
                zIndex: mobileHeaderOpen ? 10 : -1,
                opacity: '0.5',
            }}
        />
    )
}

export default MobileGNBShade
