import { Box, Stack } from '@mui/material'
import {
    IMG_ABOUT_1,
    IMG_ABOUT_2,
    M_IMG_ABOUT_1,
    M_IMG_ABOUT_2,
} from '../constants/images'
import {
    ContentOuterBox,
    OutlinedBlueButton,
    SectionDesc,
    SectionHead,
    SectionTitle,
} from '../styles'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from 'react-device-detect'

const About = () => {
    return (
        <>
            <BrowserView style={{ width: '100%' }}>
                <ContentOuterBox>
                    <Stack
                        sx={{
                            width: '100%',
                            alignItems: 'center',
                            p: '120px 0 190px 0',
                            maxWidth: '1200px',
                            gap: '228px',
                        }}
                    >
                        <Stack
                            direction="row"
                            sx={{
                                width: '100%',
                                justifyContent: 'space-between',
                                position: 'relative',
                            }}
                        >
                            <Stack sx={{ zIndex: 2 }}>
                                <SectionTitle sx={{ color: '#0875f5' }}>
                                    About
                                </SectionTitle>
                                <SectionHead
                                    sx={{
                                        color: '#161718',
                                        width: '479px',
                                        pb: '40px',
                                    }}
                                >
                                    Trusted verification service of integrity.
                                </SectionHead>
                                <SectionDesc
                                    sx={{
                                        width: '378px',
                                        pb: '40px',
                                        color: '#4a4d51',
                                    }}
                                >
                                    Due to the nature of the blockchain-based
                                    data, everything is transparent and cannot
                                    be modified. Ensure integrity with reliable
                                    verification services.
                                </SectionDesc>

                                <OutlinedBlueButton title="Verify service" />
                            </Stack>
                            <Box sx={{ position: 'absolute', right: 0 }}>
                                <img
                                    src={IMG_ABOUT_1}
                                    alt=""
                                    style={{
                                        maxWidth: '740px',
                                        maxHeight: '482px',
                                        width: '100%',
                                    }}
                                />
                            </Box>
                        </Stack>

                        <Stack
                            direction="row"
                            sx={{
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <img
                                    src={IMG_ABOUT_2}
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        maxWidth: '670px',
                                        width: '100%',
                                    }}
                                />
                            </Box>
                            <Stack sx={{ alignItems: 'flex-end' }}>
                                <SectionTitle sx={{ color: '#0875f5' }}>
                                    About
                                </SectionTitle>
                                <SectionHead
                                    sx={{
                                        maxWidth: '541px',
                                        width: '100%',
                                        pb: '40px',
                                        textAlign: 'right',
                                        color: '#161718',
                                    }}
                                >
                                    Provides an
                                    <br />
                                    open API
                                    <br />
                                    for easy deployment.
                                </SectionHead>
                                <SectionDesc
                                    sx={{
                                        width: '485px',
                                        pb: '40px',
                                        textAlign: 'right',
                                        color: '#4a4d51',
                                    }}
                                >
                                    It is an open API provided by the Firma
                                    chain, and only the functions required by
                                    the enterprise can be used in conjunction.
                                    It can be introduced even if you are not a
                                    blockchain developer, from creating contract
                                    files to inquiring.
                                </SectionDesc>

                                <OutlinedBlueButton title="API Docs" />
                            </Stack>
                        </Stack>
                    </Stack>
                </ContentOuterBox>
            </BrowserView>
            <MobileView style={{ width: '100%' }}>
                <ContentOuterBox>
                    <Stack
                        direction="column"
                        alignItems="center"
                        sx={{ width: '100%', p: '60px 0', gap: '70px' }}
                    >
                        <Stack sx={{ width: '100%', alignItems: 'center' }}>
                            <SectionTitle sx={{ color: '#0875f5' }}>
                                about
                            </SectionTitle>
                            <SectionHead
                                sx={{ textAlign: 'center', pb: '24px' }}
                            >
                                Trusted <br />
                                verification service
                                <br /> of integrity.
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    textAlign: 'center',
                                    width: '310px',
                                    color: '#4a4d51',
                                    pb: '30px',
                                }}
                            >
                                Due to the nature of the blockchain-based data,
                                everything is transparent and cannot be
                                modified. Ensure integrity with reliable
                                verification services.
                            </SectionDesc>

                            <OutlinedBlueButton
                                title="Verify Service"
                                sx={{ mb: '50px' }}
                            />

                            <Box>
                                <img
                                    src={M_IMG_ABOUT_1}
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </Box>
                        </Stack>
                        <Stack sx={{ width: '100%', alignItems: 'center' }}>
                            <SectionTitle sx={{ color: '#0875f5' }}>
                                about
                            </SectionTitle>
                            <SectionHead
                                sx={{ textAlign: 'center', pb: '24px' }}
                            >
                                Provides an <br />
                                open API
                                <br /> for easy deployment.
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    textAlign: 'center',
                                    color: '#4a4d51',
                                    pb: '30px',
                                }}
                            >
                                It is an open API provided by the Firma chain,{' '}
                                <br />
                                and only the functions required by the
                                enterprise <br />
                                can be used in conjunction. It can be introduced{' '}
                                <br />
                                even if you are not a blockchain developer,{' '}
                                <br />
                                from creating contract files to inquiring.
                            </SectionDesc>

                            <OutlinedBlueButton
                                title="API Docs"
                                sx={{ mb: '50px' }}
                            />

                            <Box>
                                <img
                                    src={M_IMG_ABOUT_2}
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </ContentOuterBox>
            </MobileView>
        </>
    )
}

export default About
