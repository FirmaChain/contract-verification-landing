import { Box, Stack } from '@mui/material'
import { BrowserView, MobileView } from 'react-device-detect'
import { IMG_VERIFICATION, M_IMG_VERIFICATION } from '../constants/images'
import {
    ContentOuterBox,
    SectionDesc,
    SectionHead,
    SectionTitle,
} from '../styles'

const Verification = () => {
    return (
        <ContentOuterBox>
            <BrowserView>
                <Stack
                    sx={{
                        width: '100%',
                        alignItems: 'center',
                        p: '130px 0 160px 0',
                        maxWidth: '1200px',
                    }}
                >
                    <Stack
                        direction="row"
                        sx={{
                            width: '100%',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            pb: '80px',
                        }}
                    >
                        <Stack direction="column" justifyContent="flex-start">
                            <SectionTitle sx={{ color: '#0875f5' }}>
                                Verification service
                            </SectionTitle>
                            <SectionHead
                                sx={{
                                    width: '773px',
                                }}
                            >
                                Verification service completed with FIRMA
                                VERIFY.
                            </SectionHead>
                        </Stack>
                        <SectionDesc
                            sx={{
                                width: '357px',
                                color: '#4a4d51',
                                textAlign: 'right',
                            }}
                        >
                            With FIRMA VERIFY, reliable information <br />
                            can be recorded and verified by anyone.
                            <br /> (The scope of support will continue to
                            expand.)
                        </SectionDesc>
                    </Stack>
                    <Box>
                        <img
                            src={IMG_VERIFICATION}
                            alt=""
                            style={{ maxWidth: '100%' }}
                        />
                    </Box>
                </Stack>
            </BrowserView>
            <MobileView>
                <Stack
                    direction="column"
                    alignItems="center"
                    sx={{ width: '100%', p: '70px 0', gap: '50px' }}
                >
                    <Stack alignItems="center">
                        <SectionTitle sx={{ color: '#0875f5' }}>
                            verification service
                        </SectionTitle>
                        <SectionHead
                            sx={{
                                color: '#161618',
                                textAlign: 'center',
                                pb: '24px',
                            }}
                        >
                            Complete
                            <br /> Your Service
                            <br /> with FIRMA VERIFY.
                        </SectionHead>
                        <SectionDesc
                            sx={{
                                color: '#4a4d51',
                                maxWidth: '340px',
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            You can record trusted data and let anyone
                            <br /> verify the recorded data using FIRMA VERIFY.
                            <br />
                            (We will continue to expand our range of support.)
                        </SectionDesc>
                    </Stack>
                    <Box>
                        <img
                            src={M_IMG_VERIFICATION}
                            alt=""
                            style={{ width: '100%' }}
                        />
                    </Box>
                </Stack>
            </MobileView>
        </ContentOuterBox>
    )
}

export default Verification
