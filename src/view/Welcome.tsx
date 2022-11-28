import { Box, Stack, Typography } from '@mui/material'
import {
    IC_WELCOME_BROWSER,
    IC_WELCOME_CONTRACT,
    IC_WELCOME_FOLDER,
    IC_WELCOME_SHOPPING,
    IMG_WELCOME_BACKGROUND,
    IMG_WELCOME_BIG_CIRCLE,
} from '../constants/images'
import { Lato, Metropolis } from '../constants/theme'

const BACKGROUND = {
    width: '100%',
    backgroundImage: `url(${IMG_WELCOME_BACKGROUND})`,
    backgroundRepeat: 'none',
    height: '720px',
    justifyContent: 'center',
}

const Welcome = () => {
    return (
        <Stack direction="row" sx={{ ...BACKGROUND }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ width: '100%', maxWidth: '1200px', margin: '0 30px' }}
            >
                <Stack
                    justifyContent="center"
                    gap="40px"
                    sx={{ maxWidth: '1200px' }}
                >
                    <Typography
                        sx={{
                            width: '537px',
                            fontFamily: Metropolis,
                            fontSize: '74px',
                            fontWeight: 900,
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
                            lineHeight: '1.38',
                            letterSpacing: '-0.24px',
                            color: '#fff',
                        }}
                    >
                        FIRMA VERIFY supports verification of all data recorded
                        on FIRMACHAIN based on FIRMACHAIN’s high reliability.
                    </Typography>
                </Stack>
                <Stack justifyContent="flex-end" sx={{ pb: '60px' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '565px',
                            height: '565px',
                        }}
                    >
                        <img src={IMG_WELCOME_BIG_CIRCLE} alt="" />
                        <img
                            src={IC_WELCOME_CONTRACT}
                            alt=""
                            style={{
                                position: 'absolute',
                                top: '43px',
                                left: '73px',
                            }}
                        />

                        <img
                            src={IC_WELCOME_FOLDER}
                            alt=""
                            style={{
                                position: 'absolute',
                                top: '70px',
                                left: '356px',
                            }}
                        />

                        <img
                            src={IC_WELCOME_SHOPPING}
                            alt=""
                            style={{
                                position: 'absolute',
                                top: '355px',
                                left: '0px',
                            }}
                        />

                        <img
                            src={IC_WELCOME_BROWSER}
                            alt=""
                            style={{
                                position: 'absolute',
                                top: '360px',
                                left: '430px',
                            }}
                        />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Welcome
