import { Box, Stack } from '@mui/material'
import { IMG_HEADER_LOGO } from '../../constants/images'
import { GotoButton, NetworkIndicator } from '../../styles'

const Header = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                backgroundColor: '#80000000',

                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                height: '72px',
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
                <img src={IMG_HEADER_LOGO} alt="" />
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
