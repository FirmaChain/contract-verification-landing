import { Box, Divider, Stack, Typography } from '@mui/material'
import { isBrowser, isMobile } from 'react-device-detect'
import { IMG_LOGO_BK } from '../../constants/images'
import { GRAYef, Lato } from '../../constants/theme'
import { FooterGotoButton } from '../../styles'

const Footer = () => {
    return (
        <Stack
            alignItems="center"
            sx={{
                width: '100%',
                borderTop: isBrowser ? `1px solid ${GRAYef}` : 'none',
                p: isBrowser ? '40px 30px 60px 30px' : '30px 16px 48px 16px',
                boxSizing: 'border-box',
            }}
        >
            <Stack sx={{ width: '100%', maxWidth: '1200px' }}>
                <Stack
                    direction={isBrowser ? 'row' : 'column'}
                    justifyContent={isBrowser ? 'space-between' : 'center'}
                    alignItems={isBrowser ? 'center' : 'flex-start'}
                    sx={{ pb: isBrowser ? '40px' : '30px' }}
                    gap={isBrowser ? 0 : '22px'}
                >
                    <Box>
                        <img src={IMG_LOGO_BK} alt="" />
                    </Box>
                    <Stack direction="row" gap={isBrowser ? '80px' : '20px'}>
                        <FooterGotoButton menu="verify" />
                        <FooterGotoButton menu="api docs" />
                        <FooterGotoButton menu="ecosystem" />
                    </Stack>
                </Stack>

                {isMobile && (
                    <Divider sx={{ borderColor: GRAYef, mb: '22px' }} />
                )}

                <Stack
                    direction={isBrowser ? 'row' : 'column'}
                    justifyContent="space-between"
                    gap={isBrowser ? 0 : '20px'}
                >
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
                        ⓒ FirmaChain Pte. Ltd. {isBrowser ? '|' : <br />}
                        All Right Reserved. 71 Robinson Road, Singapore, 068895
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer
