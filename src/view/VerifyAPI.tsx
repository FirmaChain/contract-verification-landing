import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import APICodeBox from '../components/card/APICodeBox'
import Select from '../components/select/APISelect'
import { M_IMG_VERIFY_API } from '../constants/images'

import {
    SectionDesc,
    SectionHead,
    SectionTitle,
    OutlinedWhiteButton,
    ContentOuterBox,
} from '../styles'

const VerifyAPI = () => {
    const [idx, setIdx] = useState(0)
    return (
        <>
            <BrowserView style={{ width: '100%' }}>
                <ContentOuterBox>
                    <Stack
                        sx={{
                            width: '100%',
                            padding: '0 20px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Stack
                            sx={{
                                borderRadius: '24px',
                                backgroundColor: '#051527',
                                alignItems: 'center',
                                p: '130px 30px 150px 30px',
                            }}
                        >
                            <Stack
                                direction="column"
                                sx={{
                                    alignItems: 'center',
                                    gap: '100px',
                                }}
                            >
                                <Stack alignItems="center">
                                    <SectionTitle sx={{ color: '#e1e7f3' }}>
                                        verify api
                                    </SectionTitle>
                                    <Box sx={{ pb: '40px' }}>
                                        <SectionHead
                                            sx={{
                                                textAlign: 'center',
                                                color: '#fff',
                                                letterSpacing:
                                                    '-1.45px !important',
                                            }}
                                        >
                                            Effective and convenient
                                        </SectionHead>
                                        <SectionHead
                                            sx={{
                                                textAlign: 'center',
                                                color: 'transparent',
                                                background:
                                                    'linear-gradient(to left, #fff 0%, #0089ff 100%)',
                                                '-webkit-background-clip':
                                                    'text',
                                            }}
                                        >
                                            OPEN API.
                                        </SectionHead>
                                    </Box>
                                    <SectionDesc
                                        sx={{
                                            width: '714px',
                                            textAlign: 'center',
                                            pb: '40px',
                                            color: '#d0d5e0',
                                        }}
                                    >
                                        It supports various functions such as
                                        contract recording & inquiry, extraction
                                        of HASH values, and status recording,
                                        and provides a guide for easy
                                        application.
                                    </SectionDesc>
                                    <OutlinedWhiteButton title="API Docs" />
                                </Stack>

                                <APICodeBox />
                            </Stack>
                        </Stack>
                    </Stack>
                </ContentOuterBox>
            </BrowserView>
            <MobileView style={{ width: '100%' }}>
                <Stack
                    alignItems="center"
                    sx={{
                        width: '100%',
                        backgroundColor: '#051527',
                        p: '60px 0 70px 0',
                    }}
                >
                    <ContentOuterBox>
                        <Stack gap="50px">
                            <Stack alignItems="center">
                                <SectionTitle sx={{ color: '#fff' }}>
                                    VERIFY API
                                </SectionTitle>
                                <SectionHead
                                    sx={{
                                        maxWidth: '242px',
                                        width: '100%',
                                        color: '#fff',
                                        textAlign: 'center',
                                    }}
                                >
                                    Convenient and Efficient
                                </SectionHead>
                                <SectionHead
                                    sx={{
                                        textAlign: 'center',
                                        color: 'transparent',
                                        background:
                                            'linear-gradient(to left, #fff 0%, #0769D9 100%)',
                                        '-webkit-background-clip': 'text',
                                        pb: '30px',
                                    }}
                                >
                                    OPEN API.
                                </SectionHead>
                                <SectionDesc
                                    sx={{
                                        color: '#d0d5e0',
                                        maxWidth: '342px',
                                        width: '100%',
                                        textAlign: 'center',
                                        pb: '50px',
                                    }}
                                >
                                    We support a wide range of features
                                    including the recording and searching of
                                    contract data,
                                    <br /> extraction of HASH values and
                                    contract status recording.
                                    <br /> To make your implementation process
                                    seamless, we also provide a detailed user
                                    guide.
                                </SectionDesc>

                                <OutlinedWhiteButton title="API Docs" />
                            </Stack>
                            <APICodeBox />
                            {/* <Stack gap="20px">
                                <Select idx={idx} setIdx={setIdx} />

                                <Box>
                                    <img
                                        src={M_IMG_VERIFY_API}
                                        alt=""
                                        style={{ width: '100%' }}
                                    />
                                </Box>
                            </Stack> */}
                        </Stack>
                    </ContentOuterBox>
                </Stack>
            </MobileView>
        </>
    )
}

export default VerifyAPI
