import { Box, Stack, Typography } from '@mui/material'
import {
    IC_WELCOME_BROWSER,
    IC_WELCOME_CONTRACT,
    IC_WELCOME_FOLDER,
    IC_WELCOME_SHOPPING,
    PC_IMG_WELCOME_BACKGROUND,
    M_IMG_WELCOME_BACKGROUND,
    IMG_WELCOME_BIG_CIRCLE,
    M_IMG_MAIN_VISUAL,
} from '../constants/images'
import { GRAYef, Lato, Metropolis } from '../constants/theme'
import { BrowserView, MobileView, isBrowser } from 'react-device-detect'
import { useIntersection } from 'react-use'
import { useEffect, useRef } from 'react'
import useGlobalState from '../hooks/useGlobalState'

const BACKGROUND = {
    width: '100%',
    backgroundImage: isBrowser
        ? `url(${PC_IMG_WELCOME_BACKGROUND})`
        : `url(${M_IMG_WELCOME_BACKGROUND})`,
    backgroundRepeat: 'no-repeat',
    height: isBrowser ? '720px' : '635px',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    padding: '0 30px',
}

const Welcome = () => {
    const { setHeaderState } = useGlobalState()

    const interTopRef = useRef(null)
    const interBottomRef = useRef(null)

    const topIntersection = useIntersection(interTopRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
    })

    const bottomIntersection = useIntersection(interBottomRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
    })

    useEffect(() => {
        if (topIntersection && bottomIntersection) {
            topIntersection.isIntersecting &&
                bottomIntersection.isIntersecting &&
                setHeaderState(0)

            !topIntersection.isIntersecting &&
                bottomIntersection.isIntersecting &&
                setHeaderState(1)

            !topIntersection.isIntersecting &&
                !bottomIntersection.isIntersecting &&
                setHeaderState(2)
        }
    }, [topIntersection, bottomIntersection])

    return (
        <Stack sx={{ width: '100%' }}>
            <Box ref={interTopRef} />
            <Stack direction="row" sx={{ ...BACKGROUND }}>
                <BrowserView style={{ width: '100%' }}>
                    <Stack
                        sx={{
                            width: '100%',
                            alignItems: 'center',
                            pt: '100px',
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{
                                width: '100%',
                                maxWidth: '1200px',
                            }}
                        >
                            <Stack
                                justifyContent="center"
                                gap="40px"
                                sx={{ maxWidth: '1200px' }}
                            >
                                <Typography
                                    sx={{
                                        width: '566px',
                                        fontFamily: Metropolis,
                                        fontSize: '78px',
                                        fontWeight: 700,
                                        lineHeight: '1.03',
                                        letterSpacing: '-1.85px',
                                        color: '#fff',
                                    }}
                                >
                                    Trust,
                                    <br />
                                    verify
                                    <br />
                                    more than that.
                                </Typography>

                                <Typography
                                    sx={{
                                        width: '371px',
                                        fontFamily: Lato,
                                        fontSize: '20px',
                                        lineHeight: '1.4',
                                        letterSpacing: '-0.3px',
                                        color: '#fff',
                                    }}
                                >
                                    FIRMA VERIFY supports verification of all
                                    data recorded on FIRMACHAIN based on
                                    FIRMACHAIN’s high reliability.
                                </Typography>
                            </Stack>

                            <Stack justifyContent="flex-end">
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '565px',
                                        height: '565px',
                                    }}
                                >
                                    <img
                                        src={IMG_WELCOME_BIG_CIRCLE}
                                        alt=""
                                        style={{ maxWidth: '565px' }}
                                    />

                                    <Box
                                        sx={{
                                            position: 'absolute',

                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '440px',
                                            height: '440px',
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-20s"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        >
                                            <div>
                                                <img
                                                    src={IC_WELCOME_CONTRACT}
                                                    alt=""
                                                    className="merryGoRound-reverse-20s"
                                                    style={{
                                                        maxWidth: '154px',
                                                    }}
                                                />
                                            </div>
                                        </Stack>
                                    </Box>

                                    <Box
                                        sx={{
                                            position: 'absolute',

                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '300px',
                                            height: '300px',
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-reverse-15s"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                alignItems: 'flex-end',
                                            }}
                                        >
                                            <img
                                                src={IC_WELCOME_FOLDER}
                                                alt=""
                                                className="merryGoRound-15s"
                                                style={{
                                                    maxWidth: '117px',
                                                }}
                                            />
                                        </Stack>
                                    </Box>

                                    <Box
                                        sx={{
                                            position: 'absolute',

                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '480px',
                                            height: '480px',
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-25s"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                justifyContent: 'flex-end',
                                            }}
                                        >
                                            <div>
                                                <img
                                                    src={IC_WELCOME_SHOPPING}
                                                    alt=""
                                                    className="merryGoRound-reverse-25s"
                                                    style={{
                                                        maxWidth: '117px',
                                                    }}
                                                />
                                            </div>
                                        </Stack>
                                    </Box>
                                    <Box
                                        sx={{
                                            position: 'absolute',

                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '500px',
                                            height: '500px',
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-25s"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                justifyContent: 'flex-end',
                                                alignItems: 'flex-end',
                                            }}
                                        >
                                            <div>
                                                <img
                                                    src={IC_WELCOME_BROWSER}
                                                    alt=""
                                                    className="merryGoRound-reverse-25s"
                                                    style={{
                                                        maxWidth: '131px',
                                                    }}
                                                />
                                            </div>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </BrowserView>
                <MobileView style={{ width: '100%' }}>
                    <Stack
                        direction="column"
                        gap="20px"
                        alignItems="center"
                        pb="24px"
                    >
                        <Typography
                            sx={{
                                fontFamily: Metropolis,
                                fontSize: '40px',
                                fontWeight: 'bold',
                                lineHeight: 1.1,
                                letterSpacing: '-1px',
                                color: '#fff',
                                textAlign: 'center',
                                pt: '98px',
                            }}
                        >
                            Trust, verify
                            <br /> more than that.
                        </Typography>
                        <Typography
                            sx={{
                                width: '278px',
                                fontFamily: Lato,
                                fontSize: '16px',
                                lineHeight: 1.25,
                                letterSpacing: '-0.24px',
                                textAlign: 'center',
                                color: GRAYef,
                            }}
                        >
                            FIRMA VERIFY supports verification of all data
                            recorded on FIRMACHAIN based on FIRMACHAIN’s high
                            reliability.
                        </Typography>
                    </Stack>
                    <Stack alignItems="center">
                        <img
                            src={M_IMG_MAIN_VISUAL}
                            alt=""
                            style={{ maxWidth: '320px', width: '100%' }}
                        />
                    </Stack>
                </MobileView>
            </Stack>
            <Box ref={interBottomRef} />
        </Stack>
    )
}

export default Welcome
