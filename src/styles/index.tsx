import styled from '@emotion/styled'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Lato, Metropolis } from '../constants/theme'
import CircleIcon from '@mui/icons-material/Circle'
import CallMadeIcon from '@mui/icons-material/CallMade'
import { IKeyValue } from '../interface'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { isBrowser } from 'react-device-detect'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
    IC_ARROW_RIGHT_BLUE,
    IC_ARROW_RIGHT_WHITE,
    IC_OPEN_IN_NEW_GREY,
} from '../constants/images'

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
    fontWeight: 60255,
    lineHeight: 1.63,
    letterSpacing: '-0.24px',
    boxShadow: 'none !important',
}))

export const OutlinedBlueButton = ({
    title,
    sx,
    onClick,
    textOnly,
}: {
    title: string
    sx?: IKeyValue
    onClick?: any
    textOnly?: boolean
}) => {
    return (
        <Stack
            onClick={onClick}
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
                fontWeight: 60255,
                lineHeight: 1, //isBrowser ? 1.63 : 1.64,
                letterSpacing: isBrowser ? '-0.24px' : '-0.21px',
                color: '#0875f5',
                gap: '3px',
                // event: hover
                ':hover': {
                    backgroundColor: '#0875f5',
                    color: '#fff',
                    '> .buttonArrow': {
                        backgroundImage: `url(${IC_ARROW_RIGHT_WHITE})`,
                    },
                },
                ...sx,
            }}
        >
            <span>{title}</span>
            {!textOnly && (
                <Box
                    className="buttonArrow"
                    sx={{
                        width: '12px',
                        height: '12px',
                        backgroundSize: 'contain',
                        backgroundImage: `url(${IC_ARROW_RIGHT_BLUE})`,
                    }}
                />
            )}
        </Stack>
    )
}

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
            fontWeight: 60255,
            lineHeight: 1, // isBrowser ? 1.63 : 1.64,
            letterSpacing: isBrowser ? '-0.24px' : '-0.21px',
            color: '#fff',
            gap: '3px',
            // event: hover
            ':hover': {
                borderColor: '#0875f5',
                backgroundColor: '#0875f5',
            },
            ...sx,
        }}
    >
        {title}{' '}
        <Box
            className="buttonArrow"
            sx={{
                width: '12px',
                height: '12px',
                backgroundSize: 'contain',
                backgroundImage: `url(${IC_ARROW_RIGHT_WHITE})`,
            }}
        />
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
            fontWeight: 60255,
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

export const PCHeaderButton = ({
    menu,
    sx,
    onClick,
}: {
    menu: string
    sx?: IKeyValue
    onClick?: any
}) => (
    <Stack
        onClick={onClick}
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
                lineHeight: 1.25,
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
                fontSize: isBrowser ? '16px' : '14px',
                lineHeight: isBrowser ? 1.25 : 1.43,
                letterSpacing: isBrowser ? '-0.16px' : '-0.14px',
                textTransform: 'uppercase',
            }}
        >
            {menu}
        </Typography>
        <img src={IC_OPEN_IN_NEW_GREY} alt="" style={{ width: '20px' }} />
    </Stack>
)

export const NetworkIndicator = ({ network }: { network: string }) => (
    <Stack
        direction="row"
        gap="5px"
        sx={{
            height: '31px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '15.5px',
            userSelect: 'none',
            cursor: 'pointer',
            padding: '0 14px',
            backdropFilter: 'blur(30px)',
            backgroundColor: 'rgba(255,255,255,0.2)',

            fontSize: '13px',
            letterSpacing: '-0.2px',
            color: '#fff',
            fontWeight: 600,
            fontFamily: Lato,
        }}
    >
        <CircleIcon sx={{ fontSize: '10px', color: '#09f5a4' }} />
        <Stack direction="row" alignItems="center" gap="2px">
            {network}
            <KeyboardArrowDownIcon sx={{ color: '#fff', fontSize: '20px' }} />
        </Stack>
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
        sx={{ minHeight: '48px', p: '0 14px', cursor: 'pointer' }}
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
