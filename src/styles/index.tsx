import styled from '@emotion/styled'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Lato, Metropolis } from '../constants/theme'
import CircleIcon from '@mui/icons-material/Circle'
import CallMadeIcon from '@mui/icons-material/CallMade'

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    paddingBottom: '20px',
    fontFamily: Metropolis,
    fontSize: '18px',
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: '-0.27px',
    // color: '#0875f5',
}))

export const SectionHead = styled(Typography)(({ theme }) => ({
    fontFamily: Metropolis,
    fontSize: '54px',
    fontWeight: 'bold',
    lineHeight: 1.07,
    letterSpacing: '-1.35px',
    // color: '#161718',
}))

export const SectionDesc = styled(Typography)(({ theme }) => ({
    fontFamily: Lato,
    fontSize: '18px',
    lineHeight: 1.22,
    letterSpacing: '-0.27px',
    // color: '#4a4d51',
}))

export const RedirectButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    // border: '1px solid #0875f5',
    // color: '#0875f5',
    width: '200px',
    height: '48px',

    fontFamily: Lato,
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.63,
    letterSpacing: '-0.24px',
    boxShadow: 'none !important',
}))

export const GotoButton = ({ menu }: { menu: string }) => (
    <Stack direction="row" alignItems="center" sx={{ cursor: 'pointer' }}>
        <Typography
            sx={{
                color: '#fff',
                fontSize: '16px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                textTransform: 'uppercase',
                fontWeight: 500,
            }}
        >
            {menu}
        </Typography>
        <CallMadeIcon sx={{ fontSize: '20px', color: '#fff' }} />
    </Stack>
)

export const NetworkIndicator = ({ network }: { network: string }) => (
    <Stack
        direction="row"
        gap="5px"
        sx={{
            width: '101px',
            height: '33px',
            border: 'solid 1px rgba(0, 245, 255, 0.55)',
            backgroundColor: '#0555b2',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            fontSize: '16px',
            letterSpacing: '-0.16px',
            color: '#00f5ff',
            userSelect: 'none',
            cursor: 'pointer',
        }}
    >
        <CircleIcon sx={{ fontSize: '10px', lineHeight: 0 }} /> {network}
    </Stack>
)
