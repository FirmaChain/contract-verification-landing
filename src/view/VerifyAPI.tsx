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
} from '../styles'

const VerifyAPI = () => {
    return (
        <Stack
            sx={{
                width: '100%',
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
                    <SectionHead sx={{ textAlign: 'center', color: '#fff' }}>
                        Effective and convenient
                    </SectionHead>
                    <SectionHead
                        sx={{
                            textAlign: 'center',
                            color: 'transparent',
                            background:
                                'linear-gradient(to left, #c1e2ff, #0089ff)',
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
                        color: '#fff',
                    }}
                >
                    It supports various functions such as contract recording &
                    inquiry, extraction of HASH values, and status recording,
                    and provides a guide for easy application.
                </SectionDesc>
                <RedirectButton
                    sx={{
                        border: '1px solid white',
                        color: '#fff',
                        mb: '100px',
                    }}
                >
                    API Docs
                </RedirectButton>
                <APICodeBox />
            </Stack>
        </Stack>
    )
}

export default VerifyAPI
