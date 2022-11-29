import styled from '@emotion/styled'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Lato, Metropolis } from '../constants/theme'
import CircleIcon from '@mui/icons-material/Circle'
import CallMadeIcon from '@mui/icons-material/CallMade'
import { IKeyValue } from '../interface'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { isBrowser } from 'react-device-detect'

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    paddingBottom: isBrowser ? '20px' : '16px',
    fontFamily: Metropolis,
    fontSize: isBrowser ? '18px' : '14px',
    fontWeight: 'bold',
    lineHeight: isBrowser ? 1 : 1.29,
    letterSpacing: isBrowser ? '-0.45px' : '-0.35px',
}))

export const SectionHead = styled(Typography)(({ theme }) => ({
    fontFamily: Metropolis,
    fontSize: isBrowser ? '54px' : '32px',
    fontWeight: 'bold',
    lineHeight: isBrowser ? 1.07 : 1.06,
    letterSpacing: isBrowser ? '-1.35px' : '-0.48px',
}))

export const SectionDesc = styled(Typography)(({ theme }) => ({
    fontFamily: Lato,
    fontSize: isBrowser ? '18px' : '16px',
    lineHeight: isBrowser ? 1.22 : 1.25,
    letterSpacing: isBrowser ? '-0.27px' : '-0.24px',
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
            width: isBrowser ? '200px' : '162px',
            height: isBrowser ? '48px' : '42px',
            border: '1px solid #0875f5',
            borderRadius: '4px',
            userSelect: 'none',
            cursor: 'pointer',

            // text
            fontFamily: Lato,
            fontSize: isBrowser ? '16px' : '14px',
            fontWeight: 600,
            lineHeight: isBrowser ? 1.63 : 1.64,
            letterSpacing: isBrowser ? '-0.24px' : '-0.21px',
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
            width: isBrowser ? '200px' : '162px',
            height: isBrowser ? '48px' : '42px',
            border: '1px solid #fff',
            borderRadius: '4px',
            userSelect: 'none',
            cursor: 'pointer',

            // text
            fontFamily: Lato,
            fontSize: isBrowser ? '16px' : '14px',
            fontWeight: 600,
            lineHeight: isBrowser ? 1.63 : 1.64,
            letterSpacing: isBrowser ? '-0.24px' : '-0.21px',
            color: '#fff',

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
            backgroundColor: isBrowser ? '#0875f5' : '#0698f7',
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

export const ListSelectBox = ({
    title,
    nowIdx,
    idx,
    onClick,
}: {
    title: string
    onClick: any
    nowIdx: number
    idx: number
}) => (
    <Stack
        justifyContent="center"
        onClick={onClick}
        sx={{ height: '48px', p: '0 14px', cursor: 'pointer' }}
    >
        <Typography
            sx={{
                fontFamily: Lato,
                fontSize: '16px',
                lineHeight: 1.13,
                letterSpacing: '-0.24px',
                color: nowIdx === idx ? '#999' : '#fff',
            }}
        >
            {title}
        </Typography>
    </Stack>
)

export const ContentOuterBox = styled(Stack)(({ theme }) => ({
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: isBrowser ? '0 30px' : '0 16px',
}))
