import styled from '@emotion/styled'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Lato, Metropolis } from '../constants/theme'
import CircleIcon from '@mui/icons-material/Circle'
import CallMadeIcon from '@mui/icons-material/CallMade'
import { IKeyValue } from '../interface'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

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
    fontWeight: 'bold',
    lineHeight: 1,
    letterSpacing: '-0.45px',
}))

export const SectionHead = styled(Typography)(({ theme }) => ({
    fontFamily: Metropolis,
    fontSize: '54px',
    fontWeight: 'bold',
    lineHeight: 1.07,
    letterSpacing: '-1.35px',
}))

export const SectionDesc = styled(Typography)(({ theme }) => ({
    fontFamily: Lato,
    fontSize: '18px',
    lineHeight: 1.22,
    letterSpacing: '-0.27px',
}))

export const RedirectButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    width: '200px',
    height: '48px',
    fontFamily: Lato,
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.63,
    letterSpacing: '-0.24px',
    boxShadow: 'none !important',
}))

export const OutlinedBlueButton = ({
    title,
    sx,
}: {
    title: string
    sx?: IKeyValue
}) => (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="buttonHover"
        sx={{
            // box
            width: '200px',
            height: '48px',
            border: '1px solid #0875f5',
            borderRadius: '4px',
            userSelect: 'none',
            cursor: 'pointer',

            // text
            fontFamily: Lato,
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: 1.63,
            letterSpacing: '-0.24px',
            color: '#0875f5',
            // event: hover
            ':hover': {
                backgroundColor: '#0875f5',
                color: '#fff',
            },
            ...sx,
        }}
    >
        {title} <KeyboardArrowRightIcon />
    </Stack>
)

export const OutlinedWhiteButton = ({
    title,
    sx,
}: {
    title: string
    sx?: IKeyValue
}) => (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="buttonHover"
        sx={{
            // box
            width: '200px',
            height: '48px',
            border: '1px solid #fff',
            borderRadius: '4px',
            userSelect: 'none',
            cursor: 'pointer',

            // text
            fontFamily: Lato,
            fontSize: '16px',
            color: '#fff',
            fontWeight: 600,
            lineHeight: 1.63,
            letterSpacing: '-0.24px',

            // event: hover
            ':hover': {
                borderColor: '#0875f5',
                backgroundColor: '#0875f5',
            },
            ...sx,
        }}
    >
        {title} <KeyboardArrowRightIcon />
    </Stack>
)

export const ContainedBlueButton = ({
    title,
    sx,
    onClick,
}: {
    title: string
    sx?: IKeyValue
    onClick: Function
}) => (
    <Stack
        className="buttonHover"
        alignItems="center"
        justifyContent="center"
        sx={{
            width: '200px',
            height: '48px',
            backgroundColor: '#0875f5',
            borderRadius: '4px',
            // font
            fontSize: '18px',
            fontWeight: 600,
            fontFamily: Lato,
            lineHeight: 1.22,
            letterSpacing: '-0.27px',
            color: '#fff',
            cursor: 'pointer',
            userSelect: 'none',
            ':hover': {
                backgroundColor: '#0058bc',
            },
            ...sx,
        }}
    >
        {title}
    </Stack>
)

export const GotoButton = ({ menu, sx }: { menu: string; sx?: IKeyValue }) => (
    <Stack
        className="buttonHover"
        direction="row"
        alignItems="center"
        sx={{
            cursor: 'pointer',
            color: '#fff',
            ':hover': { color: '#a0d3ff' },
            ...sx,
        }}
    >
        <Typography
            sx={{
                fontFamily: Lato,
                fontWeight: 'bold',
                fontSize: '16px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                textTransform: 'uppercase',
            }}
        >
            {menu}
        </Typography>
        <CallMadeIcon sx={{ fontSize: '20px' }} />
    </Stack>
)

export const FooterGotoButton = ({
    menu,
    sx,
}: {
    menu: string
    sx?: IKeyValue
}) => (
    <Stack
        direction="row"
        alignItems="center"
        sx={{
            cursor: 'pointer',
            color: '#888888',
        }}
    >
        <Typography
            sx={{
                fontFamily: Lato,
                fontWeight: 'bold',
                fontSize: '16px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                textTransform: 'uppercase',
            }}
        >
            {menu}
        </Typography>
        <CallMadeIcon sx={{ fontSize: '20px' }} />
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
