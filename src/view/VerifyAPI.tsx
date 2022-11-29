import { Box, Stack } from '@mui/material'
import APICodeBox from '../components/card/APICodeBox'
import UtilizationCard from '../components/card/UtilizationCard'
import { UTILIZATION_DATA } from '../constants/common'
import { IMG_VERIFY_API } from '../constants/images'
import { IKeyValue } from '../interface'
import {
    SectionDesc,
    SectionHead,
    SectionTitle,
    RedirectButton,
    OutlinedWhiteButton,
} from '../styles'

const VerifyAPI = () => {
    return (
        <Stack
            sx={{ width: '100%', padding: '0 50px', boxSizing: 'border-box' }}
        >
            <Stack
                sx={{
                    borderRadius: '24px',
                    backgroundColor: '#051527',
                    alignItems: 'center',
                }}
            >
                <Stack
                    direction="column"
                    sx={{
                        pt: '130px',
                        pb: '150px',
                        alignItems: 'center',
                        maxWidth: '1200px',
                    }}
                >
                    <SectionTitle sx={{ pb: '40px', color: '#e1e7f3' }}>
                        verify api
                    </SectionTitle>
                    <Box sx={{ pb: '40px' }}>
                        <SectionHead
                            sx={{
                                textAlign: 'center',
                                color: '#fff',
                                letterSpacing: '-1.45px !important',
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
                                '-webkit-background-clip': 'text',
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
                        It supports various functions such as contract recording
                        & inquiry, extraction of HASH values, and status
                        recording, and provides a guide for easy application.
                    </SectionDesc>

                    <OutlinedWhiteButton
                        title="API Docs"
                        sx={{ mb: '100px' }}
                    />

                    <APICodeBox />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default VerifyAPI
