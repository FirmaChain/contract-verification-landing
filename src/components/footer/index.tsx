import { Box, Divider, Stack, Typography } from '@mui/material'
import { IMG_FOOTER_LOGO } from '../../constants/images'
import { GRAYef, Lato } from '../../constants/theme'
import { FooterGotoButton } from '../../styles'

const Footer = () => {
    return (
        <Stack
            alignItems="center"
            sx={{
                width: '100%',
                borderTop: `1px solid ${GRAYef}`,
                p: '40px 0 60px 0',
            }}
        >
            <Stack sx={{ width: '100%', maxWidth: '1200px' }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ pb: '40px' }}
                >
                    <Box>
                        <img src={IMG_FOOTER_LOGO} alt="" />
                    </Box>
                    <Stack direction="row" gap="80px">
                        <FooterGotoButton menu="verify" />
                        <FooterGotoButton menu="api docs" />
                        <FooterGotoButton menu="ecosystem" />
                    </Stack>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" gap="16px" alignItems="center">
                        <Typography
                            sx={{
                                color: '#787a7c',
                                fontSize: '14px',
                                fontFamily: Lato,
                                letterSpacing: '-0.14px',
                                cursor: 'pointer',
                            }}
                        >
                            info@firmachain.org
                        </Typography>
                        <Divider
                            orientation="vertical"
                            sx={{ height: '14px', borderColor: '#787a7c' }}
                        />
                        <Typography
                            sx={{
                                color: '#787a7c',
                                fontSize: '14px',
                                fontFamily: Lato,
                                letterSpacing: '-0.14px',
                                cursor: 'pointer',
                            }}
                        >
                            Terms of service
                        </Typography>
                    </Stack>
                    <Typography
                        sx={{
                            fontFamily: Lato,
                            fontSize: '14px',
                            color: '#8d9098',
                            letterSpacing: '-0.14px',
                        }}
                    >
                        ⓒ FirmaChain Pte. Ltd. | All Right Reserved. 71 Robinson
                        Road, Singapore, 068895
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer
