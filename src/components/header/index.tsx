import { Box, Stack, Typography } from '@mui/material'
import {
    M_IMG_LOGO_WH,
    IMG_LOGO_WH,
    M_IMG_LOGO_BK,
    IC_OPEN_IN_NEW_DARK_GREY,
    IC_CLOSE,
} from '../../constants/images'
import { PCHeaderButton, OutlinedBlueButton } from '../../styles'
import { BrowserView, MobileView } from 'react-device-detect'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { GRAY50, GRAYef, Lato } from '../../constants/theme'

import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import CallMadeIcon from '@mui/icons-material/CallMade'
import useGlobalState from '../../hooks/useGlobalState'
import NetworkSelect from '../select/NetworkSelect'
import { VERIFY_SERVICE } from '../../constants/links'

const Header = () => {
    const [idx, setIdx] = useState(0)

    const { headerState, mobileHeaderOpen, setMobileHeaderOpen } =
        useGlobalState()

    const HEADER_BG_SX = [
        {
            backgroundColor: mobileHeaderOpen ? '#fff' : 'transparent',
            backdropFilter: 'blur(0px)',
        },
        {
            backgroundColor: mobileHeaderOpen
                ? '#fff'
                : 'rgba(255, 255, 255, 0.16)',
            backdropFilter: 'blur(30px)',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        },
        {
            backgroundColor: '#FFF',
            backdropFilter: 'un',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.08)',
        },
    ]

    const HEADER_TEXT_SX = [
        { color: '#FFF' },
        { color: '#FFF' },
        { color: '#343539' },
    ]

    const HEADER_IMAGE_URL = [IMG_LOGO_WH, IMG_LOGO_WH, M_IMG_LOGO_BK]

    return (
        <>
            <BrowserView>
                <Box
                    className="allTransition1s"
                    sx={{
                        position: 'fixed',
                        boxSizing: 'border-box',
                        p: '0 30px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        height: '72px',
                        zIndex: 100,
                        ...HEADER_BG_SX[headerState],
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
                            <img
                                src={HEADER_IMAGE_URL[headerState]}
                                alt=""
                                style={{ width: '171px' }}
                            />
                        </Box>

                        <Stack
                            direction="row"
                            gap="90px"
                            sx={{ flex: 1, justifyContent: 'center' }}
                        >
                            <PCHeaderButton
                                menu={'verify'}
                                sx={HEADER_TEXT_SX[headerState]}
                                onClick={() =>
                                    window.open(VERIFY_SERVICE, '_blank')
                                }
                            />
                            <PCHeaderButton
                                menu={'api docs'}
                                sx={HEADER_TEXT_SX[headerState]}
                            />
                            <PCHeaderButton
                                menu={'ecosystem'}
                                sx={HEADER_TEXT_SX[headerState]}
                            />
                        </Stack>

                        <Stack
                            direction="column"
                            gap="10px"
                            sx={{ position: 'relative', width: '140px' }}
                        >
                            <NetworkSelect idx={idx} setIdx={setIdx} />
                        </Stack>
                    </Stack>
                </Box>
            </BrowserView>
            <MobileView>
                <Box
                    className="allTransition1s"
                    sx={{
                        position: 'fixed',
                        width: '100%',
                        borderBottom: mobileHeaderOpen ? '#fff' : 'unset',
                        display: 'flex',
                        justifyContent: 'center',
                        height: '58px',
                        zIndex: 100,
                        ...HEADER_BG_SX[headerState === 1 ? 2 : headerState],
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ width: '100%', p: '14px 14px' }}
                    >
                        <Stack
                            alignItems="center"
                            justifyContent="flex-end"
                            sx={{ height: '100%' }}
                        >
                            <img
                                src={
                                    mobileHeaderOpen || headerState > 0
                                        ? M_IMG_LOGO_BK
                                        : M_IMG_LOGO_WH
                                }
                                alt=""
                                style={{ width: '152px' }}
                            />
                        </Stack>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: '100%' }}
                        >
                            {mobileHeaderOpen ? (
                                <img
                                    src={IC_CLOSE}
                                    alt=""
                                    style={{ width: '16px' }}
                                />
                            ) : (
                                <MenuIcon
                                    sx={{
                                        fontSize: '32px',
                                        color:
                                            headerState > 0 ? '#000' : '#fff',
                                    }}
                                    onClick={() => setMobileHeaderOpen(true)}
                                />
                            )}
                        </Stack>
                    </Stack>
                </Box>
                <Drawer
                    anchor="top"
                    open={mobileHeaderOpen}
                    onClose={() => setMobileHeaderOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxShadow: 'none',
                            position: 'absolute',
                            top: '58px',
                        },
                        '& .MuiBackdrop-root': {
                            backgroundColor: 'transparent',
                        },
                        '& .MuiPaper-root': {
                            padding: '0 16px 20px 16px',
                        },
                    }}
                >
                    {['Verify', 'api docs', 'ecosystem'].map((text, index) => (
                        <>
                            <ListItem
                                key={text}
                                sx={{
                                    p: '16px 0',
                                    color: '#4a4d51',
                                    ':hover': {
                                        color: '#161718',
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                        fontFamily: Lato,
                                        fontWeight: 600,
                                        lineHeight: 1.25,
                                        letterSpacing: '-0.16px',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {text}
                                </Typography>
                                <img
                                    src={IC_OPEN_IN_NEW_DARK_GREY}
                                    alt=""
                                    style={{ width: '20px' }}
                                />
                            </ListItem>
                            {/* {index !== 2 && (
                                <Divider
                                    sx={{ border: `1px dashed ${GRAYef}` }}
                                />
                            )} */}
                        </>
                    ))}
                    <OutlinedBlueButton
                        textOnly
                        title="Contact"
                        sx={{
                            width: 'calc(100% - 2px)',
                            height: '48px',
                            fontSize: '16px',
                            fontWeight: 600,
                            mt: '28px',
                        }}
                    />
                </Drawer>
            </MobileView>
        </>
    )
}

export default Header
