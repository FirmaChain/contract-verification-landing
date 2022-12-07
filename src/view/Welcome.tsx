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
    minHeight: isBrowser ? '720px' : '635px',
    height: '100%',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    padding: isBrowser ? '0 30px' : '0',
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
                                        maxWidth: '464px',
                                        width: '100%',
                                        fontFamily: Metropolis,
                                        fontSize: '78px',
                                        fontWeight: 'bold',
                                        lineHeight: '1',
                                        letterSpacing: '-1.95px',
                                        color: '#fff',
                                    }}
                                >
                                    Verify
                                    <br />
                                    Your Trust
                                    <br />
                                    and Beyond.
                                </Typography>

                                <Typography
                                    sx={{
                                        width: '100%',
                                        maxWidth: '360px',
                                        fontFamily: Lato,
                                        fontSize: '20px',
                                        lineHeight: '1.4',
                                        letterSpacing: '-0.3px',
                                        color: '#fff',
                                    }}
                                >
                                    Based on FirmaChain’s high credibility,
                                    FIRMA VERIFY authenticates all recorded data
                                    on FIRMACHAIN.
                                </Typography>
                            </Stack>

                            <Stack justifyContent="flex-end">
                                <Stack
                                    sx={{
                                        position: 'relative',
                                        maxWidth: '545px',
                                        maxHeight: '545px',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <img
                                        src={IMG_WELCOME_BIG_CIRCLE}
                                        alt=""
                                        style={{
                                            maxWidth: '545px',
                                            width: '100%',
                                        }}
                                    />

                                    {/* <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '510px',
                                            height: '510px',
                                            zInded: 3,
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-30s"
                                            sx={{
                                                width: '500px',
                                                height: '510px',
                                            }}
                                        >
                                            <img
                                                src={IC_WELCOME_BROWSER}
                                                alt=""
                                                className="merryGoRound-reverse-30s"
                                                style={{
                                                    maxWidth: '131px',
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
                                            width: '420px',
                                            height: '420px',
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-reverse-20s"
                                            sx={{
                                                width: '420px',
                                                height: '420px',
                                            }}
                                        >
                                            <img
                                                src={IC_WELCOME_CONTRACT}
                                                alt=""
                                                className="merryGoRound-20s"
                                                style={{
                                                    maxWidth: '154px',
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
                                            width: '300px',
                                            height: '300px',
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-15s"
                                            sx={{
                                                width: '300px',
                                                height: '300px',
                                            }}
                                        >
                                            <img
                                                src={IC_WELCOME_FOLDER}
                                                alt=""
                                                className="merryGoRound-reverse-15s"
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
                                            width: '470px',
                                            height: '470px',
                                            zIndex: 3,
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-20s"
                                            sx={{
                                                width: '470px',
                                                height: '470px',
                                            }}
                                        >
                                            <img
                                                src={IC_WELCOME_SHOPPING}
                                                alt=""
                                                className="merryGoRound-reverse-20s"
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
                                            width: '220px',
                                            height: '220px',
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-25s"
                                            sx={{
                                                width: '220px',
                                                height: '220px',
                                            }}
                                        >
                                            <Box
                                                className="merryGoRound-reverse-25s"
                                                sx={{
                                                    width: '38px',
                                                    height: '38px',
                                                    borderRadius: '50%',
                                                    boxShadow:
                                                        '0 3px 20px 0 rgba(0, 8, 36, 0.15)',
                                                    backgroundImage:
                                                        'linear-gradient(141deg, #e2f4ff 14%, #57b5e2 86%)',
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
                                            width: '383px',
                                            height: '383px',
                                        }}
                                    >
                                        <Stack
                                            className="merryGoRound-reverse-15s"
                                            sx={{
                                                width: '383px',
                                                height: '383px',
                                            }}
                                        >
                                            <Box
                                                className="merryGoRound-15s"
                                                sx={{
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    boxShadow:
                                                        '0 3px 20px 0 rgba(0, 8, 36, 0.15)',
                                                    backgroundImage:
                                                        'linear-gradient(141deg, #e2f4ff 14%, #57b5e2 86%)',
                                                }}
                                            />
                                        </Stack>
                                    </Box> */}
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </BrowserView>
                <MobileView style={{ width: '100%' }}>
                    <Stack
                        direction="column"
                        gap="20px"
                        alignItems="center"
                        sx={{ boxSizing: 'border-box', p: '0 30px' }}
                    >
                        <Typography
                            sx={{
                                fontFamily: Metropolis,
                                fontSize: '37px',
                                fontWeight: 'bold',
                                lineHeight: 1.08,
                                letterSpacing: '-0.93px',
                                color: '#fff',
                                textAlign: 'center',
                                pt: '104px',
                            }}
                        >
                            Verify Your Trust and Beyond.
                        </Typography>
                        <Typography
                            sx={{
                                maxWidth: '278px',
                                width: '100%',
                                fontFamily: Lato,
                                fontSize: '16px',
                                lineHeight: 1.25,
                                letterSpacing: '-0.24px',
                                textAlign: 'center',
                                color: GRAYef,
                                pb: '8px',
                            }}
                        >
                            FIRMA VERIFY supports verification of all data
                            recorded on FIRMACHAIN based on FIRMACHAIN’s high
                            reliability.
                        </Typography>
                    </Stack>
                    <Stack
                        alignItems="center"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: 'calc(100vw - 50px)',
                        }}
                    >
                        <img
                            src={M_IMG_MAIN_VISUAL}
                            alt=""
                            style={{
                                maxWidth: 'calc(100% - 30px)',
                                width: '100%',
                                position: 'absolute',
                                top: '-2px',
                            }}
                        />
                    </Stack>
                </MobileView>
            </Stack>
            <Box ref={interBottomRef} />
        </Stack>
    )
}

export default Welcome
