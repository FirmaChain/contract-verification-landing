import { Box, Stack } from '@mui/material'
import { IMG_HEADER_LOGO } from '../../constants/images'
import { GotoButton, NetworkIndicator } from '../../styles'

const Header = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                backgroundColor: 'rgba(143, 143, 143, 0.3)',
                backdropFilter: 'blur(10px)',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                height: '72px',
                zIndex: 100,
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '1200px',
                }}
            >
                <Box sx={{ cursor: 'pointer' }}>
                    <img src={IMG_HEADER_LOGO} alt="" />
                </Box>
                <Stack direction="row" gap="90px">
                    <GotoButton menu={'verify'} />
                    <GotoButton menu={'api docs'} />
                    <GotoButton menu={'ecosystem'} />
                </Stack>

                <NetworkIndicator network={'Testnet'} />
            </Stack>
        </Box>
    )
}

export default Header
