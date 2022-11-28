import { Stack } from '@mui/material'
import ServiceList from '../components/card/ServicesList'
import { IMG_VERIFICATION } from '../constants/images'
import { SectionDesc, SectionHead, SectionTitle } from '../styles'

const Services = () => {
    return (
        <Stack
            sx={{
                width: '100%',
                alignItems: 'center',
            }}
        >
            <Stack
                sx={{
                    maxWidth: '1200px',
                    width: '100%',
                    pt: '130px',
                    pb: '160px',
                    alignItems: 'center',
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
                        <SectionTitle sx={{ pb: '20px', color: '#0875f5' }}>
                            Verify service
                        </SectionTitle>
                        <SectionHead sx={{ width: '630px' }}>
                            Meet the various services of FIRMA VERIFY.
                        </SectionHead>
                    </Stack>
                </Stack>

                <ServiceList />
            </Stack>
        </Stack>
    )
}

export default Services
