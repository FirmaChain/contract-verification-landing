import { Stack } from '@mui/material'
import { IMG_VERIFICATION } from '../constants/images'
import { SectionDesc, SectionHead, SectionTitle } from '../styles'

const Verification = () => {
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
                        <SectionTitle sx={{ pb: '20px' }}>
                            Verification service
                        </SectionTitle>
                        <SectionHead sx={{ width: '771px' }}>
                            Verification service completed with FIRMA VERIFY.
                        </SectionHead>
                    </Stack>
                    <SectionDesc sx={{ width: '357px' }}>
                        With FIRMA VERIFY, reliable information can be recorded
                        and verified by anyone. (The scope of support will
                        continue to expand.)
                    </SectionDesc>
                </Stack>

                <img src={IMG_VERIFICATION} alt="" />
            </Stack>
        </Stack>
    )
}

export default Verification
