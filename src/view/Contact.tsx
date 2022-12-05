import { Stack, Typography } from '@mui/material'
import { BrowserView, MobileView } from 'react-device-detect'
import { Lato, Metropolis } from '../constants/theme'
import { ContainedBlueButton, ContentOuterBox } from '../styles'

const Contact = () => {
    return (
        <>
            <BrowserView style={{ width: '100%' }}>
                <ContentOuterBox>
                    <Stack
                        sx={{
                            maxWidth: '1200px',
                            width: '100%',
                            pb: '100px',
                            alignItems: 'center',
                        }}
                    >
                        <Stack
                            sx={{
                                width: '100%',
                                height: '310px',
                                borderRadius: '16px',
                                backgroundColor: '#ebf6ff',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '44px',
                                    fontFamily: Metropolis,
                                    color: '#161718',
                                    fontWeight: 'bold',
                                    lineHeight: 1,
                                    letterSpacing: '-1.1px',
                                    pb: '20px',
                                }}
                            >
                                Get in Touch!
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: Lato,
                                    fontSize: '18px',
                                    lineHeight: 1.22,
                                    letterSpacing: '-0.27px',
                                    color: '#4a4d51',
                                    pb: '36px',
                                }}
                            >
                                If you have difficulty applying the API,
                                FIRMACHAIN will support you directly.
                            </Typography>
                            <ContainedBlueButton
                                title="Contact us"
                                onClick={() => {}}
                            />
                        </Stack>
                    </Stack>
                </ContentOuterBox>
            </BrowserView>
            <MobileView style={{ width: '100%' }}>
                <ContentOuterBox sx={{ backgroundColor: '#ebf6ff' }}>
                    <Stack
                        sx={{
                            width: '100%',
                            alignItems: 'center',
                            p: '50px 0',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '30px',
                                fontFamily: Metropolis,
                                color: '#161718',
                                fontWeight: 'bold',
                                lineHeight: 1.87,
                                letterSpacing: '-0.75px',
                                pb: '16px',
                            }}
                        >
                            Get in Touch!
                        </Typography>
                        <Typography
                            sx={{
                                width: '266px',
                                fontFamily: Lato,
                                fontSize: '16px',
                                lineHeight: 1.25,
                                letterSpacing: '-0.24px',
                                color: '#4a4d51',
                                pb: '30px',
                                textAlign: 'center',
                            }}
                        >
                            If you have difficulty applying the API, FIRMACHAIN
                            will support you directly.
                        </Typography>
                        <ContainedBlueButton
                            title="Contact us"
                            onClick={() => {}}
                        />
                    </Stack>
                </ContentOuterBox>
            </MobileView>
        </>
    )
}

export default Contact
