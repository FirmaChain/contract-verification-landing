import { Stack, Typography } from '@mui/material'
import { Lato, Metropolis } from '../constants/theme'
import { ContainedBlueButton } from '../styles'

const Contact = () => {
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
                    sx={{
                        width: '100%',
                        height: '320px',
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
                            lineHeight: 1.27,
                            letterSpacing: '-1.1px',
                            pb: '24px',
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
                            pb: '40px',
                        }}
                    >
                        If you have difficulty applying the API, FIRMACHAIN will
                        support you directly.
                    </Typography>
                    <ContainedBlueButton
                        title="Contact us"
                        onClick={() => {}}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Contact
